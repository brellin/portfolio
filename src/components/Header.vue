<template>
  <nav :class="open ? 'open' : ''">
    <button v-if="!isWill" @click="getProof"></button>

    <router-link exact to="/" class="home">Home</router-link>
    <router-link to="/about" class="about">About</router-link>
    <router-link to="/work" class="work">Work</router-link>
    <router-link
      to="/blog"
      :class="`blog${
        this.$route.fullPath.match(/\/blog\/post\/(\d|new)(\/edit)?/i)
          ? ' active'
          : ''
      }`"
      >Blog {{
    }}</router-link>

    <hr id="indicator" />
  </nav>
</template>

<script>
import { getProof } from "../assets/functions";
export default {
  name: "global-header",
  computed: {
    isWill() {
      return this.$store.state.isWill;
    },
  },
  methods: {
    getProof,
  },
  props: {
    open: Boolean,
    toggleOpen: Function,
  },
};
</script>

<style lang="scss" scoped>
$home: -122px;
$about: -36px;
$work: 51px;
$blog: 130px;

nav {
  @include flex(row, center, center);
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 50px;
  height: 10%;
  background: linear-gradient($mid 90%, 95%, transparent 100%);
  z-index: 5;

  @media (max-width: 500px) {
    @include flex(column, center, center);
    position: fixed;
    width: 100%;
    left: -100%;
    background: none;
    height: auto;
    transition: 0.3s ease-out;
    top: 75px;

    &.open {
      left: 0;
      width: 50%;
    }
  }

  a {
    font-size: 2rem;
    color: whitesmoke;
    text-decoration: none;
    padding: 5px 15px;
    margin: 0 5px;
    outline: none;
    box-sizing: border-box;

    @media (max-width: 500px) {
      background: $mid;
      width: 100%;
      text-align: center;
    }

    &.home {
      &:hover ~ hr {
        @include transform(translate($home, 10px) !important);
        width: 4.5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($home, 10px));
        width: 4.5rem;
      }
    }

    &.about {
      &:hover ~ hr {
        @include transform(translate($about, 10px) !important);
        width: 5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($about, 10px));
        width: 5rem;
      }
    }

    &.work {
      &:hover ~ hr {
        @include transform(translate($work, 10px) !important);
        width: 4.25rem !important;
      }

      &.active ~ hr {
        @include transform(translate($work, 10px));
        width: 4.25rem;
      }
    }

    &.blog {
      &:hover ~ hr {
        @include transform(translate($blog, 10px) !important);
        width: 3.5rem !important;
      }

      &.active ~ hr {
        @include transform(translate($blog, 10px));
        width: 3.5rem;
      }
    }
  }

  hr {
    width: 50px;
    position: absolute;
    border: 1px solid white;
    @include transform(translate(-139px, 10px));
    user-select: none;
    z-index: -1;
    transition: 0.5s ease-in-out;

    @media (max-width: 500px) {
      display: none;
    }
  }

  button {
    position: absolute;
    right: 5px;
    top: 5px;
    @include button($bg: $accent);
    width: 35px;
    height: 35px;
    background: url("../assets/images/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 500px) {
      position: relative;
      width: 100%;
      right: auto;
      top: auto;
      background-color: $mid;
    }
  }
}
</style>
