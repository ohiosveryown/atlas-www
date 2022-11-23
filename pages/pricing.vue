<template>
  <div ref="index" class="app width">
    <header-md
      class="enter tac page-header"
      heading="Pricing"
      subheading="Choose a plan that works for your team."
    />

    <main class="enter width">Body...</main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .page-header {
    @include breakpoint(md) {
      margin: 6.4rem auto;
      width: grid-width(6);
    }
  }

  main {
    position: relative;
    padding-bottom: 50vh;
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

    //     methods: {
    //       handleScroll() {
    //         const observerOptions = {
    //           root: null,
    //           threshold: 0,
    //           rootMargin: "0px 0px -240px 0px",
    //         }
    //
    //         const observerCallback = (entries, observer) => {
    //           entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //               entry.target.classList.add("active")
    //             }
    //           })
    //         }
    //
    //         const observer = new IntersectionObserver(
    //           observerCallback,
    //           observerOptions
    //         )
    //
    //         const targets = document.querySelectorAll(".scroll-target")
    //         targets.forEach((e) => observer.observe(e))
    //       },
    //     },
    //
    //     mounted() {
    //       this.handleScroll()
    //     },
  }
</script>
