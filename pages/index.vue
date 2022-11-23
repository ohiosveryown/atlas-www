<template>
  <div ref="index" class="app">
    <header-lg
      class="enter"
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
          class="enter"
          heading="A fully integrated suite of support products"
          subheading="All of the best-in-class support tools, built specifically for support teams."
        />

        <feature-grid class="enter" />
      </section>

      <section class="customer-centric tac">
        <header-md
          heading="Customer Centric Productivity"
          subheading="Build relationships with your customers by seeing them in their full context.
          Preview how it works below 👇"
        />

        <app-preview />
      </section>

      <section class="ux">
        <header-md
          heading="A Modern Tool with a Modern User Experience"
          subheading="Finally a fast, simple UI. Rich hotkeys, a command palette, and AI accelerated productivity tools."
        />

        <ux-features class="scroll-target" />
      </section>

      <section class="signup">
        <signup
          class="scroll-target"
          heading="Work smarter. Get started today."
          subheading="Sign up today and make customer interaction easier, and smarter."
        />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

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
    @include breakpoint(md) {
      margin-bottom: 17.6rem;
    }

    header {
      margin: auto;
      @include breakpoint(md) {
        width: grid-width(6.8);
      }
    }
  }

  section.ux {
    header {
      @include breakpoint(md) {
        margin-bottom: 4.8rem;
        width: grid-width(6);
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
      enter() {
        gsap.from(".enter", {
          opacity: 0,
          duration: 1.2,
          delay: 0.15,
          stagger: 0.15,
          skewY: 10,
          y: 120,
          ease: Power4.easeOut,
        })
      },

      handleScroll() {
        const observerOptions = {
          root: null,
          threshold: 0,
          rootMargin: "0px 0px -240px 0px",
        }

        const observerCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active")
            }
          })
        }

        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        )

        const targets = document.querySelectorAll(".scroll-target")
        targets.forEach((e) => observer.observe(e))
      },
    },

    beforeDestroy() {
      this.$refs.index.style.cssText = `
          opacity: 0;
          transition: opacity 300ms ease;
        `
    },

    mounted() {
      this.handleScroll()
    },
  }
</script>
