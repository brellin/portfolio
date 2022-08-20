<template>
  <article class="comment">
    <header>
      <h3>{{ name }}</h3>
      <span>({{ momentize(date) }})</span>
    </header>

    <p>
      {{ content }}
    </p>
  </article>
</template>

<script>
  import { momentize } from "../assets/functions";
  export default {
    name: "comment-wu",
    props: {
      name: String,
      date: String,
      content: String,
    },
    methods: {
      momentize,
    },
  };
</script>

<style lang="scss">
  article.comment {
    width: calc(100% - 50px);
    border: 2px groove $light;
    border-top: 0;
    border-right: 0;
    border-radius: 25px 0 17.5% 25px;
    box-sizing: border-box;
    @include flex(row, flex-start, flex-start);

    header {
      border-right: 2px groove $light;
      padding: 5px 10px;
      margin-right: 15px;
      border-radius: 25px;
      text-align: center;

      h3 {
        font-size: 2rem;
        margin: 5px;
      }
    }

    p {
      font-size: 1.5rem;
      width: fit-content;
      margin-right: 50px;
    }
  }
</style>
