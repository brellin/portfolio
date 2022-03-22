<template>
  <main>
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
      posts: [{}, {}, {}],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("/posts")
      .then(({ data }) => {
        this.posts = data;
        this.loading = false;
      })
      .catch((err) => console.error(err));
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

  div.post-wall {
    width: 100%;
    @include flex(column, flex-start, center);
  }
}
</style>
