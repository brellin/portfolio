<template>
  <div class="modal" v-if="!isWill">
    <div class="content">
      <slot>
        <button @click="getProof">CHECK YOURSELF</button>
      </slot>
    </div>
  </div>
</template>

<script>
import { getProof } from "../assets/functions";
export default {
  name: "modal-wu",
  methods: {
    getProof,
  },
  computed: {
    isWill() {
      return this.$store.state.isWill;
    },
  },
};
</script>

<style lang='scss' scoped>
div.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  background-color: #00000055;
  @include flex(row, center, center);

  div.content {
    width: 50%;
    height: 50%;
    @include flex(row, center, center);

    button {
      @include button(5rem);
      font-weight: bold;
    }
  }
}
</style>
