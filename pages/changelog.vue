<template>
  <div class="app width">
    <header-md
      class="tac page-header"
      heading="Changelog"
      subheading="We’re always shipping updates to Atlas. Check out our changelog below or subscribe for future updates."
    />

    <main class="width">Body...</main>
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
