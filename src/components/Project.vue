<template>
  <article
    class="project"
    :style="{
      backgroundImage: `linear-gradient(#000000${
        hovered ? '80' : 'aa'
      }, #000000${hovered ? '80' : 'aa'}), url(${img})`,
    }"
    @mouseenter="() => hover(true)"
    @mouseleave="() => hover(false)"
  >
    <h2>{{ title }}</h2>
    <p @click="openProject">
      {{ description + "\n\n" }}<a :href="github">Github Repository</a>
    </p>
  </article>
</template>

<script>
export default {
  name: "project-wu",
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    hover(bool) {
      this.hovered = bool;
    },
    openProject() {
      window.open(this.url);
    },
  },
  props: {
    title: String,
    description: String,
    github: String,
    url: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
article.project {
  width: 100%;
  background-size: cover;
  text-align: center;
  min-height: 150px;
  cursor: pointer;
  padding: 2.5px 0;
  background-attachment: fixed;
  background-position: center;
  margin-bottom: 50px;
  border-radius: 50px;
  transition: 0.5s ease-out;

  @media (max-width: 500px) {
    border-radius: 25%;
  }

  h2 {
    font-family: $header-font;
    font-size: 3rem;
    color: $accent;
    -webkit-text-stroke: 1px $mid;
  }

  p {
    color: whitesmoke;
    font-size: 2rem;
    padding: 0 20%;
    white-space: pre-line;
    user-select: none;
    text-shadow: 5px 5px 25px black, 5px 5px 25px black;

    a {
      color: $accent;
      text-decoration: none;
      position: relative;
      width: 100%;

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 0px;
        transform: translate(-50vw, 20px);
        transition: 0.5s ease-out;
      }

      &:hover {
        &::before {
          width: 100%;
          background: $accent;
          transform: translateY(20px);
        }
      }
    }
  }
}
</style>