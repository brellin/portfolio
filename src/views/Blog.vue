<template>
  <main>
    <h1>Blog</h1>

    <div :class="`post-wall ${posts.length === 0 ? 'pulse' : ''}`">
      <Post v-for="p in posts" :key="p.id" v-bind="p" />
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
      posts: [],
    };
  },
  mounted() {
    axios
      .get("/posts")
      .then(({ data }) => {
        this.posts = data;
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

  h1 {
    font-size: 8rem;
  }

  div.post-wall {
    width: 100%;
    @include flex(column, flex-start, center);
  }
}
</style>
