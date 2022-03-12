<template>
  <footer>
    <h1>Footer</h1>
  </footer>
</template>

<script>
export default {
  name: "global-footer",
};
</script>

<style lang="scss" scoped>
footer {
  @include flex($justify: space-around);
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto 20px;
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

  div {
    @include flex($direction: column, $align: center);
    transition: 0.3s ease-out;

    &:hover {
      @include transform(scale(1.2));
    }

    svg.Link {
      font-size: 5rem;
      cursor: pointer;
      color: $mid;
    }
  }
}
</style>
