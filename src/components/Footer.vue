<template>
  <footer>
    <h2>Get in touch</h2>

    <div class="links">
      <a
        href="https://github.com/brellin"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a
        href="https://linkedin.com/in/brellin"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a href="mailto: william.c.umstead@gmail.com" title="Email">
        <font-awesome-icon icon="at" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "global-footer",
};
</script>

<style lang="scss" scoped>
footer {
  @include flex(column, center, center);
  width: 100%;
  justify-self: flex-end;
  transition: 1s ease-out;
  padding-bottom: 5px;
  background: linear-gradient(transparent 0%, $mid 5%, $mid 100%);
  box-sizing: border-box;

  h2 {
    margin-top: -2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
    background-color: none;
  }

  div.links {
    @include flex(row, space-around, center, nowrap);
    width: 100%;

    a {
      font-size: 5rem;
      cursor: pointer;
      color: $light;
      transition: 0.3s ease-out;

      &:hover {
        @include transform(scale(1.2));
      }
    }
  }
}
</style>
