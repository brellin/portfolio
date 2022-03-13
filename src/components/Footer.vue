<template>
  <footer>
    <h2>Get in touch</h2>

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
  </footer>
</template>

<script>
export default {
  name: "global-footer",
};
</script>

<style lang="scss" scoped>
footer {
  @include flex($justify: space-around, $wrap: wrap);
  width: 50%;
  justify-self: flex-end;
  transition: 1s ease-out;

  &.invisible {
    opacity: 0;
    transform: translateY(-10px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  h2 {
    width: 100%;
    text-align: center;
  }

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
</style>
