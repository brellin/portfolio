<template>
  <main v-if="!loading">
    <div class="buttons">
      <button v-if="ending === 'edit'" @click="deletePost">X</button>
      <button v-else @click="goBack">Back</button>
      <button v-if="!auth && isWill" @click="editPost">Edit</button>
    </div>

    <h2 v-if="!auth">{{ post.title }}</h2>
    <span>{{ editedString(post.date, newPost ? null : post.edited) }}</span>
    <p v-if="!auth">{{ post.text }}</p>

    <template v-if="auth">
      <div class="category">
        <h3>Category</h3>
        <input
          list="categories"
          type="text"
          name="category"
          @input="handleCat"
          :value="post.category"
          :disabled="!auth"
        />
        <datalist :disabled="!auth" id="categories" name="category" @change="handleChange">
          <option value=""></option>
          <option v-for="(c, i) in cats" :value="c" :key="i">
            {{ c }}
          </option>
        </datalist>
      </div>

      <input
        name="title"
        :value="post.title"
        placeholder="Title"
        type="text"
        @change="handleChange"
        :disabled="!auth"
      />

      <span>{{ editedString(post.date, newPost ? null : post.edited) }}</span>

      <textarea
        :value="post.text"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iste. Dignissimos perferendis iusto molestias totam animi beatae odio aliquam ut minima nulla, doloribus quae natus fuga, voluptatibus illo! Cupiditate, commodi."
        @change="handleChange"
        name="text"
        :disabled="!auth"
      />

      <button v-if="auth" :disabled="!auth" @click="submitPost">Submit</button>
    </template>
  </main>
</template>

<script>
  import axios from "../plugins/axios";
  import { momentize, editedString } from "../assets/functions";
  export default {
    name: "post-page-wu",
    methods: {
      editedString,
      momentize,
      goBack() {
        this.$router.push("/blog");
      },
      editPost() {
        this.$router.push(`${this.$route.path}/edit`);
      },
      submitPost() {
        this.newPost
          ? axios
              .post("/posts/new", this.post)
              .then((r) => {
                console.log(r);
                this.$router.push(`/blog/post/${r.data.id}`);
              })

              .catch((err) => console.error(err))
          : axios
              .put(`/posts/${this.post.id}`, this.post)
              .then((r) => {
                console.log(r);
                this.$router.push(`/blog/post/${this.post.id}`);
              })

              .catch((err) => console.error(err));
      },
      handleChange(e) {
        this.post[e.target.name] = e.target.value;
      },
      handleCat(e) {
        const catName = e.target.value;
        this.handleChange(e);
        this.cats = this.categories.filter((cat) => new RegExp(catName, "i").test(cat));
      },
      deletePost() {
        window.confirm(`Do you really want to delete ${this.post.title}?`)
          ? axios
              .delete(`/posts/${this.post.id}`)
              .then(() => this.$router.push("/blog"))
              .catch((err) => console.error(err))
          : alert("You have chosen not to delete the post.");
      },
    },
    data() {
      return {
        post: {
          text: "",
          date: Date.now().toString(),
          edited: Date.now().toString(),
          title: "",
          category: "",
        },
        loading: true,
        cats: this.$store.state.categories,
      };
    },
    mounted() {
      if (this.ending !== "new")
        axios
          .get(`/posts/${this.$route.params.id}`)
          .then(({ data }) => {
            this.post = data;
            this.loading = false;
          })
          .catch((err) => console.error(err));
      else this.loading = false;
    },
    computed: {
      ending() {
        return this.$route.path.split("/").pop();
      },
      auth() {
        return /new|edit/i.test(this.ending);
      },
      newPost() {
        return this.ending === "new";
      },
      isWill() {
        return this.$store.state.isWill;
      },
      categories() {
        return this.$store.state.categories;
      },
    },
  };
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    margin: 50px auto 0;
    padding: 0 25px;
    box-sizing: border-box;
    @include flex(column, center, center, wrap);
    background: $text-bg;
    box-shadow: 0 0 250px 15px $text-bg;

    button {
      @include button();
      align-self: flex-start;
      margin-top: -35px;
      margin-bottom: 35px;
    }

    div.buttons {
      @include flex($justify: space-between);
      width: 100%;
    }

    h2 {
      margin: 0;
      font-size: 4rem;
    }

    span {
      font-size: 1.3rem;
      color: slategray;
    }

    p {
      font-size: 2rem;
      white-space: pre-line;
    }

    input,
    textarea {
      width: 100%;
      box-sizing: border-box;
      border-radius: 5px;
    }

    input {
      font-size: 4rem;
      padding: 0;
      text-align: center;
    }

    textarea {
      min-height: 200px;
      resize: none;
      padding: 0 15px;
    }

    button {
      @include button(3rem);
      margin-top: 5px;
    }

    div.category {
      @include flex(column, center, center);
      background: field;
      border: 1px solid black;
      position: relative;
      padding: 15px 0 5px;
      margin-bottom: 15px;

      h3 {
        font-size: 1.75rem;
        background: linear-gradient(transparent 41%, field 41%);
        position: absolute;
        top: -27.5px;
        left: 5px;
      }

      input,
      datalist {
        outline: none;
        background: none;
        border: none;
        font-size: 2rem;
        text-transform: capitalize;
      }
    }
  }
</style>
