<template>
  <div class="app width">
    <header-md
      class="tac page-header"
      heading="Help Center"
      subheading="The fastest way to create AI chatbots on your
      own terms and without coding."
    />

    <main class="width">Main...</main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .page-header {
    @include breakpoint(md) {
      margin: 6.4rem auto 2.4rem;
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

  section.icon-wrapper {
    margin: 0 auto;

    @include breakpoint(md) {
      width: grid-width(6);
    }
  }

  ul.icons {
    display: flex;
    justify-content: center;
  }

  .icon {
    width: 88px;
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
