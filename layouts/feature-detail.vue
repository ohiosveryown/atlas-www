<template>
  <div>
    <navigation />
    <nuxt />
    <footer class="debug tac space">footer</footer>
  </div>
</template>

<style lang="scss">
  @import "~static/style/grid.scss";

  .app-feature {
    .page-header {
      @include breakpoint(md) {
        margin: 0 auto 2.4rem;
        width: grid-width(6);
      }
    }

    main {
      position: relative;
      margin: 0 auto;
      column-count: 1;

      @include breakpoint(sm) {
        margin-top: 9.6rem;
        column-count: 2;
        column-gap: 2.4rem;
      }

      @include breakpoint(mdl) {
        column-count: 3;
        column-gap: 2.4rem;
      }
    }

    .icon {
      margin: 6.4rem auto 2.4rem;
      width: 88px;
    }
  }
</style>

<script>
  export default {
    methods: {
      enter() {
        gsap.from(".enter", {
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          stagger: 0.12,
          skewY: 6,
          y: 80,
          ease: Power4.easeOut,
        })
      },
    },

    mounted() {
      this.enter()
    },

    beforeDestroy() {
      this.$refs.index.style.cssText = `
          opacity: 0;
          transition: opacity 300ms ease;
        `
    },
  }
</script>
