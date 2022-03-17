<template>
  <main v-if="post">
    <button @click="goBack">Back</button>
    <h2>{{ post.title }}</h2>
    <span>{{ editedString(post.date, post.edited) }}</span>
    <p>{{ post.text }}</p>
  </main>
</template>

<script>
import axios from "../plugins/axios";
import { editedString } from "../assets/functions";
export default {
  name: "post-page-wu",
  methods: {
    editedString,
    goBack() {
      this.$router.push("/blog");
    },
  },
  data() {
    return {
      post: undefined,
    };
  },
  mounted() {
    axios
      .get(`/posts/${this.$route.params.id}`)
      .then(({ data }) => {
        this.post = data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style lang='scss'>
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

  &.edit {
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
