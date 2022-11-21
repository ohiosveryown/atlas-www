<template>
  <div class="app">
    <navigation />
    <header-lg
      heading="Give your customers superhuman support"
      subheading="Atlas is a blazingly fast, modern support platform, helping identify and diagnose customer experience and interaction."
    />
    <main class="width">
      <figure class="enter disable hero">
        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1668962888/atlas-refresh/index/cmk7xbfccjnfmyyr2lok.png"
          alt="Atlas Customer Timeline"
        />
      </figure>

      <section class="platform">
        <header-md
          heading="A fully integrated suite of support products"
          subheading="All of the best-in-class support tools, built specifically for support teams."
        />

        <feature-grid />
      </section>

      <section class="customer-centric tac">
        <header-md
          heading="Customer Centric Productivity"
          subheading="Build relationships with your customers by seeing them in their full context.
          Preview how it works below 👇"
        />

        <app-preview />
      </section>
      <div class="debug space">hello</div>
    </main>
    <!-- <exoplanet /> -->
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .space {
    margin-top: 140vh;
  }

  main {
    position: relative;
  }

  .hero {
    position: relative;
    z-index: var(--z2);
    @include breakpoint(md) {
      margin: 11.2rem 0 17.6rem;
    }
  }

  section.platform {
    header {
      @include breakpoint(md) {
        width: grid-width(5);
      }
    }
  }

  section.customer-centric {
    header {
      margin: auto;
      @include breakpoint(md) {
        width: grid-width(6.8);
      }
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
