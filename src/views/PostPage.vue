<template>
  <main v-if="!loading">
    <Modal v-if="edit" />
    <button @click="goBack">Back</button>
    <h2>{{ post.title }}</h2>
    <span>{{
      editedString(post.date, edit ? Date.now().toString() : post.edited)
    }}</span>
    <p v-if="!edit">{{ post.text }}</p>
    <textarea
      v-else
      :placeholder="post.text"
      :value="post.text"
      @change="handleChange"
      name="text"
    />
    <button v-if="edit" @click="submitPost">Submit</button>
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
    submitPost() {
      axios

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
  },
  data() {
    return {
      post: undefined,
      loading: true,
      edit: this.$route.path.split("/").pop() === "edit",
    };
  },
  mounted() {
    axios
      .get(`/posts/${this.$route.params.id}`)
      .then(({ data }) => {
        this.post = data;
        this.loading = false;
      })
      .catch((err) => console.error(err));
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
  input {
    width: 100%;
    font-size: 4rem;
    border-radius: 5px;
    padding: 0;
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 200px;
    resize: none;
    border-radius: 5px;
    padding: 0;
  }

  button {
    @include button(3rem);
    margin-top: 5px;
  }
}

div.restricted {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  background-color: #00000055;
  @include flex(row, center, center);

  div.Verification {
    width: 50%;
    height: 50%;
    @include flex(row, center, center);

    button {
      @include button(5rem);
      font-weight: bold;
    }
  }
}
</style>
