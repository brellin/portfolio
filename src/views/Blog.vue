<template>
  <main>
    <h3>Filter</h3>
    <select @change="updateCategory">
      <option value="">select a category</option>
      <option v-for="c, i in categories" :key="i" :value="c">{{c}}</option>
    </select>
    <div :class="`post-wall ${posts.length === 0 ? 'pulse' : ''}`">
      <Post v-for="p in posts" :key="p.id" v-bind="p" :loading="loading" />
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
      posts: [ {}, {}, {} ],
      categories: [ {} ],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("/posts/categories")
      .then(({ data }) => {
        this.categories = data;
        axios
          .get("/posts/category/general")
          .then(({ data }) => {
          this.posts = data
          this.loading = false
        })
      })
      .catch((err) => console.error(err));
  },
  methods: {
    updateCategory(e) {
      const cat = e.target.value
      console.log(cat)
      axios.get(`/posts/category/${ cat?cat:'general' }`)
        .then(({ data }) => {
      this.posts = data
    })
  }
},
  components: {
    Post,
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

  select, option {
    text-transform: capitalize;
  }

  div.post-wall {
    width: 100%;
    @include flex(column, flex-start, center);
  }
}
</style>
