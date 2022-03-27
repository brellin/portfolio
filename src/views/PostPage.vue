<template>
  <main v-if="!loading">
    <Modal v-if="auth" />

    <div class="buttons">
      <button v-if="ending === 'edit'" @click="deletePost">X</button>
      <button v-else @click="goBack">Back</button>
      <button v-if="!auth && isWill" @click="editPost">Edit</button>
    </div>

    <h2 v-if="!auth">{{ post.title }}</h2>
    <input
      v-else
      name="title"
      :value="post.title"
      placeholder="Title"
      type="text"
      @change="handleChange"
    />

    <span>{{ editedString(post.date, newPost ? null : post.edited) }}</span>

    <p v-if="!auth">{{ post.text }}</p>
    <textarea
      v-else
      :value="post.text"
      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iste. Dignissimos perferendis iusto molestias totam animi beatae odio aliquam ut minima nulla, doloribus quae natus fuga, voluptatibus illo! Cupiditate, commodi."
      @change="handleChange"
      name="text"
    />

    <button v-if="auth" @click="submitPost">Submit</button>
  </main>
</template>

<script>
import Modal from "../components/Modal.vue";
import axios from "../plugins/axios";
import { momentize, editedString } from "../assets/functions";
export default {
  name: "post-page-wu",
  components: {
    Modal,
  },
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
      console.log(this.post[e.target.name]);
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
      },
      loading: true,
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
  },
};
</script>

<style lang='scss' scoped>
main {
  width: 100%;
  margin: 50px auto 0;
  @include flex(column, center, center, wrap);
  background: $text-bg;
  box-shadow: 0 0 250px 15px $text-bg;

  button {
    @include button;
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
}
</style>
