<template>
  <main>
    <h1>Work</h1>
    <Project class="project" v-for="p in projects" :key="p.title" v-bind="p" />
  </main>
</template>

<script>
import Project from "../components/Project.vue";
import { projects } from "../assets/data";
export default {
  name: "wu-work",
  data() {
    return {
      projects,
    };
  },
  components: { Project },
};
</script>

<style lang="scss" scoped>
main {
  @include flex($direction: column, $align: center);
  margin: 0 auto 50px;
}
</style>