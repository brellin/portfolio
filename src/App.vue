<template>
  <div class="wrap">
    <Header :isOpen="isOpen" :toggleIsOpen="toggleIsOpen" />

    <router-view v-slot="{ Component, route }">
      <transition-group name="slide">
        <div
          class="routes"
          @click="if (isOpen) isOpen = false;"
          :key="route.path"
        >
          <component :is="Component" />
        </div>
      </transition-group>
    </router-view>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    toggleIsOpen: function () {
      this.isOpen = !this.isOpen;
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
div.wrap {
  @include flex(column, flex-start, center);
  width: 100%;
  min-height: 100vh;

  div.routes {
    padding: 50px 5%;
    width: 100%;
    min-height: calc(100vh - 180px);
    box-sizing: border-box;

    main {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
