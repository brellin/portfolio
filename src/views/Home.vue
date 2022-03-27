<template>
  <main>
    <div class="intro">
      <h3 class="top" :style="top">Hi, my name is</h3>

      <h1>William Charles Umstead Junior</h1>

      <h3 class="bottom" :style="bottom">
        Full Stack Web Developer and Writer
      </h3>
    </div>

    <div class="skills">
      <h2>Specializing in:</h2>
      <img
        v-for="{ title, img } in imgs"
        :key="title"
        :alt="title"
        :title="title"
        :src="img"
      />
    </div>
  </main>
</template>

<script>
import { getCurrentInstance, onMounted } from "@vue/runtime-core";
import { homeImgs } from "../assets/data";
export default {
  name: "wu-home",
  data() {
    return {
      top: {
        position: "relative",
        left: "100vw",
        opacity: 0,
      },
      bottom: {
        position: "relative",
        right: "100vw",
        opacity: 0,
      },
      imgs: homeImgs,
    };
  },
  setup() {
    onMounted(() => {
      const { top, bottom } = getCurrentInstance().data;
      setTimeout(() => {
        top.left = 0;
        top.opacity = 1;
        bottom.right = 0;
        bottom.opacity = 1;
      }, 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
main {
  @include flex($align: flex-start, $justify: space-between);
  user-select: none;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  div.intro {
    @include flex($direction: column, $justify: center);
    width: max-content;

    @media (max-width: 800px) {
      width: 100%;
    }

    h1 {
      color: $dark;
      font-family: $header-font;
      font-size: 4rem;
      margin: 0;

      @media (max-width: 670px) {
        font-size: 2rem;
      }
    }

    h3 {
      color: $accent;
      font-size: 25px;
      padding: 0 5px;
      transition: 1s ease-out;

      @media (max-width: 500px) {
        font-size: 15px;
      }

      &.top {
        border-bottom: 1px solid #001a1a;
      }

      &.bottom {
        border-top: 1px solid #001a1a;
        align-self: flex-end;
        text-align: right;
      }
    }
  }

  div.skills {
    @include flex($justify: flex-end, $wrap: wrap);
    max-width: 44%;
    width: 100%;
    transition: 1.5s ease-out;
    margin-top: 15px;

    @media (max-width: 1270px) {
      max-width: 100%;
      margin: 25px auto 0;
    }

    h2 {
      width: 100%;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      margin: 2.5px;
      flex-basis: 17%;

      @media (max-width: 670px) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin: 2.5px auto;
      }
    }
  }
}
</style>
