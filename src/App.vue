<template>
  <div class="wrap">
    <Header :isOpen="isOpen" :toggleIsOpen="toggleIsOpen" />
    <router-view v-slot="{ Component, route }">
      <transition-group name="slide">
        <div
          class="Routes"
          @click="if (isOpen) isOpen = false;"
          :key="route.path"
        >
          <component :is="Component" />
        </div>
      </transition-group>
    </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
  width: 100%;
  @include flex(column, flex-start, center);

  div.Routes {
    margin: 75px auto 0;
    min-height: 65vh;
    width: 90%;

    main {
      width: 100%;
      box-sizing: border-box;
      @include flex(column, flex-start, center);
      padding: 15px;
      margin: 35px auto 25px;
    }
  }
}
</style>
