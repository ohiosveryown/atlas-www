<template>
  <header class="width tac">
    <h1 class="enter inter fs-xxl">{{ heading }}</h1>
    <h2 class="enter founders fs-lg">
      {{ subheading }}
    </h2>
  </header>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  h1 {
    margin: 0 auto;
    background: var(--gradient-brand);
    background: linear-gradient(
      171.34deg,
      #2842ee -30.82%,
      #a056ff 54.18%,
      #4d186e 93.39%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include breakpoint(md) {
      margin: 8rem auto 0;
      width: grid-width(10);
      padding-bottom: 3.6rem;
    }
  }

  h2 {
    margin: 0 auto;
    opacity: 0.72;
    @include breakpoint(md) {
      width: grid-width(7);
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading"],

    methods: {
      enter() {
        gsap.from(".enter", {
          opacity: 0,
          duration: 1.2,
          delay: 0.75,
          stagger: 0.15,
          skewY: 10,
          y: 120,
          ease: Power4.easeOut,
        })
      },
    },

    mounted() {
      this.enter()
    },
  }
</script>
