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
    border-bottom: 1px ridge $mid;
    border-radius: 25px 0 25% 25px;
    box-sizing: border-box;
    @include flex(row, flex-start, flex-start);

    @media (max-width: 800px) {
      width: 100%;
    }

    header {
      border: 1px ridge $mid;
      border-bottom: 0;
      border-top: 0;
      padding: 5px 10px;
      margin-right: 15px;
      border-radius: 25px;
      text-align: center;
      width: min-content;
      min-width: 10rem;
      background-color: $mid;

      h3 {
        font-size: 2rem;
        margin: 5px;
        color: $text-bg;
      }

      span {
        color: $light;
      }
    }

    p {
      font-size: 1.5rem;
      width: fit-content;
      margin-right: 50px;
    }
  }
</style>
