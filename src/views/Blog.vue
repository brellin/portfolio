<template>
  <main>
    <div class="filter">
      <h2>Filter</h2>
      <select @change="updateCategory">
        <option value="">all categories</option>
        <option v-for="(c, i) in categories" :key="i" :value="c">{{ c }}</option>
      </select>
    </div>
    <div :class="`post-wall ${posts.length === 0 ? 'pulse' : ''}`">
      <Post v-for="p in posts" :key="p._id" v-bind="p" :loading="loading" />
    </div>
  </main>
</template>

<script>
  import axios from "../plugins/axios";
  import Post from "../components/Post.vue";
  export default {
    name: "wu-blog",
    data() {
      return {
        posts: [{}, {}, {}],
        loading: true,
      };
    },
    mounted() {
      axios
        .get("/posts/categories")
        .then(({ data }) => {
          this.$store.commit("populateCategories", data);
          axios.get("/posts").then(({ data }) => {
            this.posts = data;
            this.loading = false;
          });
        })
        .catch((err) => console.error(err));
    },
    methods: {
      updateCategory(e) {
        const cat = e.target.value;
        axios.get(cat ? `/posts/category/${cat}` : "/posts").then(({ data }) => {
          this.posts = data;
        });
        this.size = 1;
        this.blur();
      },
    },
    components: {
      Post,
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      },
    },
  };
</script>

<style lang="scss" scoped>
  main {
    @include flex(column, flex-start, center);

    @media (max-width: 500px) {
      margin-top: -25px;
    }

    h1 {
      font-size: 8rem;
    }

    div.filter {
      border: 1px solid black;
      border-radius: 5px;
      padding: 10px 5px 5px;
      position: relative;
      background: $text-bg;

      h2 {
        position: absolute;
        top: -22.5px;
        background: linear-gradient($light 53%, transparent 50%);
      }

      select,
      option {
        text-transform: capitalize;
        outline: none;
      }

      select {
        background: none;
        border: none;

        option {
          background: $text-bg;
        }
      }
    }

    div.post-wall {
      width: 100%;
      @include flex(column, flex-start, center);
    }
  }
</style>
