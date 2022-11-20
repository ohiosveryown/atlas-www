<template>
  <div class="app">
    <navigation />
    <header-main
      heading="Give your customers superhuman support"
      subheading="Atlas is a blazingly fast, modern support platform, helping identify and diagnose customer experience and interaction."
    />
    <main class="width">
      <img
        class="enter disable hero"
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1668962888/atlas-refresh/index/cmk7xbfccjnfmyyr2lok.png"
        alt="Atlas Customer Timeline"
      />
    </main>
    <!-- <exoplanet /> -->
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .app {
    position: relative;
  }

  .hero {
    @include breakpoint(md) {
      margin-top: 11.2rem;
    }
  }

  .scroll-target {
    opacity: 0;
    transform: translateY(4rem);
    transition: all 600ms ease 100ms;
    will-change: transform, opacity;
  }

  .active {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<script>
  export default {
    methods: {
      handleScroll() {
        const elements = document.querySelectorAll(".scroll-target")

        let observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add("active")
            }
          })
        })

        elements.forEach((e) => {
          observer.observe(e)
        })
      },
    },
    mounted() {
      this.handleScroll()
    },
  }
</script>
