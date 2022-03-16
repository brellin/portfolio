<template>
  <footer>
    <h2>Get in touch</h2>

    <div class="links">
      <a
        href="https://github.com/brellin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a
        href="https://linkedin.com/in/brellin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a href="mailto: william.c.umstead@gmail.com">
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
  width: 50%;
  justify-self: flex-end;
  transition: 1s ease-out;
  border: 2px solid $mid;
  margin-bottom: 50px;

  &.invisible {
    opacity: 0;
    transform: translateY(-10px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  h2 {
    margin-top: -2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 3rem;
    background-color: $light;
  }

  div.links {
    @include flex(row, space-around, center, nowrap);
    width: 100%;

    a {
      font-size: 5rem;
      cursor: pointer;
      color: $mid;
      transition: 0.3s ease-out;

      &:hover {
        @include transform(scale(1.2));
      }
    }
  }
}
</style>
