<template>
  <nav :class="open ? 'open' : ''">
    <button v-if="!isWill" @click="getProof"></button>

    <router-link exact to="/" class="home" @click="toggleOpen"
      >Home</router-link
    >
    <router-link to="/about" class="about" @click="toggleOpen"
      >About</router-link
    >
    <router-link to="/work" class="work" @click="toggleOpen">Work</router-link>
    <router-link
      to="/blog"
      :class="`blog${
        this.$route.fullPath.match(/\/blog\/post\/(\d|new)(\/edit)?/i)
          ? ' active'
          : ''
      }`"
      @click="toggleOpen"
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
    background: none;
    height: max-content;
    position: fixed;
    top: 75px;
    left: 0;
    width: 50vw;
    transform: translateX(-50vw);
    transition: 1s ease-out;

    &.open {
      transform: translateX(0);

      a,
      button {
        transform: translateX(0);
      }
    }
  }

  a {
    font-size: 2rem;
    color: whitesmoke;
    text-decoration: none;
    padding: 5px 15px;
    margin: 0 5px;
    outline: none;
    transition: 0.3s ease-out;

    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        transition-duration: #{"." + ($i + 3) + "s"};
      }
    }

    @media (max-width: 500px) {
      @include transform(translateX(-50vw));
      background-color: $mid;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
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
      border-radius: 0;
      text-align: center;
      width: 100%;
      position: initial;
      right: auto;
      top: auto;
      background-color: $mid;
      transform: translateX(-100%);
      box-sizing: border-box;
      transition: 0.4s ease-out;
    }
  }
}
</style>
