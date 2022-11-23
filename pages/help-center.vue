<template>
  <div ref="index" class="app-feature width">
    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
      alt=""
      class="enter icon"
    />
    <header-md
      class="enter tac page-header"
      heading="Help Center"
      subheading="The fastest way to create AI chatbots on your
      own terms and without coding."
    />

    <main class="enter width">Main...</main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
</style>

<script>
  export default {
    layout: "feature-detail",
    //     methods: {
    //       enter() {
    //         gsap.from(".enter", {
    //           opacity: 0,
    //           duration: 0.5,
    //           delay: 0.1,
    //           stagger: 0.12,
    //           skewY: 6,
    //           y: 80,
    //           ease: Power4.easeOut,
    //         })
    //       },
    //     },
    //
    //     mounted() {
    //       this.enter()
    //     },
    //
    //     beforeDestroy() {
    //       this.$refs.index.style.cssText = `
    //           opacity: 0;
    //           transition: opacity 300ms ease;
    //         `
    //     },
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
