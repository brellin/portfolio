<template>
  <nav>
    <router-link exact to="/" class="home" @click="toggleIsOpen"
      >Home</router-link
    >
    <router-link to="/about" class="about" @click="toggleIsOpen"
      >About</router-link
    >
    <router-link to="/work" class="work" @click="toggleIsOpen"
      >Work</router-link
    >
    <router-link to="/blog" class="blog" @click="toggleIsOpen"
      >Blog</router-link
    >
    <hr />
  </nav>
</template>

<script>
export default {
  name: "global-header",
  props: {
    isOpen: Boolean,
    toggleIsOpen: Function,
  },
};
</script>

<style lang="scss" scoped>
$home: -129px;
$about: -36px;
$work: 54px;
$blog: 135px;

nav {
  @include flex(row, center, center);
  width: 100%;
  min-height: 50px;
  height: 10%;
  position: fixed;
  background: linear-gradient($mid 90%, 95%, transparent 100%);
  z-index: 5;

  @media (max-width: 500px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    color: whitesmoke;
    text-decoration: none;
    padding: 5px 15px;
    margin: 0 5px;
    outline: none;

    &.home {
      &:hover ~ hr {
        @include transform(translate($home, 15px) !important);
        width: 5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($home, 15px));
      }
    }

    &.about {
      &:hover ~ hr {
        @include transform(translate($about, 15px) !important);
        width: 5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($about, 15px));
      }
    }

    &.work {
      &:hover ~ hr {
        @include transform(translate($work, 15px) !important);
        width: 4.25rem !important;
      }

      &.active ~ hr {
        @include transform(translate($work, 15px));
        width: 4.25rem;
      }
    }

    &.blog {
      &:hover ~ hr {
        @include transform(translate($blog, 15px) !important);
        width: 3.5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($blog, 15px));
        width: 3.5rem;
      }
    }
  }

  hr {
    width: 50px;
    position: absolute;
    border: 1px solid white;
    @include transform(translate(-139px, 15px));
    user-select: none;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }
}
</style>
