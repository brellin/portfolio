<template>
  <div :class="`post${loading ? ' loading' : ''}`" @click="() => goToPost(id)">
    <h2>{{ title }}</h2>
    <span>{{ editedString(date, edited) }}</span>
  </div>
</template>

<script>
import { editedString } from "../assets/functions";
export default {
  name: "post-wu",
  props: {
    title: String,
    date: String,
    edited: String,
    id: Number,
    loading: Boolean,
  },
  methods: {
    editedString,
    goToPost(id) {
      this.$router.push(`/blog/post/${id}`);
    },
  },
};
</script>

<style lang='scss'>
div.post {
  @include flex(column, center, center);
  width: calc(100% - 60px);
  border: 1px solid $dark;
  border-radius: 25px;
  padding: 20px 30px;
  margin: 20px 0;
  background: $text-bg;
  cursor: pointer;
  transition: 0.3s ease-out;

  h2 {
    margin: 0;
    font-size: 4rem;
  }

  span {
    font-size: 1.5rem;
    color: slategray;
  }

  &:hover {
    transform: scale(1.05);
  }

  &.loading {
    animation: shine ease-in-out 3s infinite;
    background: linear-gradient(to right, $text-bg 25%, $mid, $text-bg 75%);
    background-size: 400%;
    pointer-events: none;

    h2 {
      background: $dark;
      width: 75%;
      height: 4rem;
      border-radius: 25px;
    }

    span {
      background: slategray;
      width: 25%;
      height: 2rem;
      border-radius: 25px;
      margin-top: 15px;
    }
  }
}
</style>
