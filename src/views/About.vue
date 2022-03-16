<template>
  <main>
    <h1>About</h1>

    <img src="../assets/images/will.jpg" alt="Will Umstead" />

    <p>
      {{ first }}
      <a href="https://bloomtech.com" target="_blank" rel="noopener noreferrer"
        >Bloom Institute of Technology</a
      >{{ second }}
    </p>
  </main>
</template>

<script>
export default {
  name: "wu-about",
  data() {
    return {
      first: `Hi! My name is Will. I started working with HTML, CSS, and PHP in 2008 during the summer of my sophomore year when I was in high school.
        I taught my webmastering class the following two years, made a website, and never did anything with it. Shortly after, I joined the army, went to South Korea, and realized that computer languages aren't the only type that I'm good at learning.

        내가 한국말 좋금 알아요. (Korean)

        私は日本語を話します。(Japanese)

        Ich spreche ein Wenig Deutsch. (German)

        J'apprends le françias maintenant. (French)

        I decided to go to college to pursue this new world of interests, just to find that the school that I was accepted to made the executive decision to drop all of the non-basic language classes that I was wishing to pursue.

        After all of that, I re-discovered my passion for coding and decided to pursue that skill at a school known as `,
      second: `!
      
        During my time at Lambda, I was able to research, learn, and develop my coding skills.
        
        Along the journey of finding income of my own, I am working a local job to sustain myself.
        
        Thank you for taking the time to read this. Have a good one!`,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  @include flex($direction: column, $align: center);
  width: 100%;

  img {
    margin: 0 auto;
    border-radius: 50%;
    width: 150px;
  }

  p {
    white-space: pre-line;
    font-size: 2rem;
    background: $text-bg;
    box-shadow: 0 0 250px 15px $text-bg;

    a {
      color: $mid;
      text-decoration: none;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        transform: translate(-700%, 20px);
        transition: 0.3s ease;
      }

      &:hover {
        &::before {
          background: $mid;
          transform: translateY(20px);
        }
      }
    }
  }
}
</style>
