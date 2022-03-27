<template>
  <div class="wrap">
    <Header :open="open" />

    <button class="burger" @click="toggleOpen"></button>

    <router-view v-slot="{ Component, route }">
      <transition-group name="slide">
        <div class="routes" :key="route.path" @click="close">
          <component :is="Component" />
        </div>
      </transition-group>
    </router-view>

    <Footer @click="close" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { login } from "./assets/functions";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  beforeMount() {
    const proof = sessionStorage.getItem("proof");
    if (proof) login(JSON.parse(proof));
  },
  beforeUnmount() {
    sessionStorage.removeItem("proof");
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
div.wrap {
  @include flex(column, flex-start, center);
  width: 100%;
  padding: 0;
  margin: 0;

  button.burger {
    @media (min-width: 500px) {
      display: none;
    }

    width: 50px;
    height: 50px;
    background-image: linear-gradient(
      transparent 24%,
      $mid 27%,
      $mid 37%,
      transparent 40%,
      transparent 44%,
      $mid 47%,
      $mid 57%,
      transparent 60%,
      transparent 64%,
      $mid 67%,
      $mid 77%,
      transparent 80%
    );
    cursor: pointer;
    z-index: 5;
    border-radius: 2.5px;
    background-size: 30px 50px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: $dark;
    position: fixed;
    top: 15px;
    left: 15px;
    border: none;
    transition: 0.3s ease;
  }

  div.routes {
    padding: 50px 5% 0;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5rem;

    main {
      width: 100%;
      box-sizing: border-box;

      h1 {
        font-size: 4rem;
        font-family: $header-font;
      }
    }
  }
}
</style>
