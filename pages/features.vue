<template>
  <div ref="index" class="app width">
    <header-md
      class="enter tac page-header"
      heading="Features"
      subheading="A fully integrated suite of support products."
    />

    <section class="enter icon-wrapper">
      <ul class="icons">
        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/yoosdxzeshd8ljparxwc.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/kpremdyi4m1mgxftjm1f.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/yoosdxzeshd8ljparxwc.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/kpremdyi4m1mgxftjm1f.png"
            alt=""
            class="icon"
          />
        </li>
      </ul>

      <ul class="icons">
        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/yoosdxzeshd8ljparxwc.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/kpremdyi4m1mgxftjm1f.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/yoosdxzeshd8ljparxwc.png"
            alt=""
            class="icon"
          />
        </li>

        <li>
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
            alt=""
            class="icon"
          />
        </li>
      </ul>
    </section>

    <main class="enter width">
      <nuxt-link to="/help-center">
        <card
          class="card"
          icon="🛟"
          heading="help center"
          subheading="The fastest way to create AI chatbots on your
          own terms and without coding."
          product="https://res.cloudinary.com/da32ufmnf/image/upload/v1669133198/atlas-refresh/features/vunfgnwlg4n9bjiclvga.png"
          bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1668997224/atlas-refresh/index/ausczy3mh1ouhwztp4wd.png"
        />
      </nuxt-link>

      <card
        class="card"
        icon="📼"
        heading="pixel perfect replay"
        subheading="A video is worth a thousand words. Let your customers..."
        product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668995137/atlas-refresh/index/p3k5m2qclpvpg2iqnl5w.png"
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />

      <card
        class="card"
        icon="📼"
        heading="pixel perfect replay"
        subheading="A video is worth a thousand words. Let your customers show you rather
        then tell you with session recording."
        product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668995137/atlas-refresh/index/p3k5m2qclpvpg2iqnl5w.png"
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />

      <card
        class="card"
        icon="📼"
        heading="pixel perfect replay"
        subheading="A video is worth a thousand words."
        product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668995137/atlas-refresh/index/p3k5m2qclpvpg2iqnl5w.png"
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />

      <card
        class="card"
        icon="📼"
        heading="pixel perfect replay"
        subheading="A video is worth a thousand words. Let your customers."
        product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668998043/atlas-refresh/index/hgivx3e0ar1mqas1obtv.png"
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />

      <card
        class="card"
        icon="📼"
        heading="pixel perfect replay"
        subheading="A video is worth a thousand words. Let your customers show you rather
        then tell you with session recording."
        product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668998043/atlas-refresh/index/hgivx3e0ar1mqas1obtv.png"
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />
    </main>
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

  .card {
    break-inside: avoid;
    margin-bottom: 3.2rem;
    padding: 2rem;
    transition: 300ms ease transform;
    will-change: transform;
  }

  @media (pointer: fine) {
    .card:hover {
      transform: scale(1.02);
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
