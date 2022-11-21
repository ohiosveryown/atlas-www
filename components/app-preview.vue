<template>
  <div class="shell">
    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1668998978/atlas-refresh/index/nvm2vaaayfpg7r3mwkns.png"
      alt=""
      class="nav"
    />

    <div class="row">
      <div class="timeline">
        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669001088/atlas-refresh/index/kdrqf5n63ssjktglrvfd.png"
          alt=""
          class="welcome scroll-target"
        />

        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669001474/atlas-refresh/index/nvxfl4d1ogscomvflph9.png"
          alt=""
          class="integration scroll-target"
        />

        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669001475/atlas-refresh/index/a6suppbz7weprqouxfj6.png"
          alt=""
          class="session scroll-target"
        />

        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669001839/atlas-refresh/index/q1waoikig5g2byofp4u6.png"
          alt=""
          class="thread scroll-target"
        />

        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669001474/atlas-refresh/index/iwnogv7hl8eazt3vea6b.png"
          alt=""
          class="end scroll-target"
        />
      </div>

      <img
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669000957/atlas-refresh/index/tkriaidy6lbcyzj4ypz7.png"
        alt=""
        class="aside"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .shell {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );

    @include breakpoint(md) {
      margin: 4rem 0;
    }
  }

  .nav {
    border-radius: 20px 20px 0px 0px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.4rem;
  }

  .timeline {
    @include breakpoint(md) {
      width: grid-width(8.25);
      * {
        margin-bottom: 8rem;
      }
      *:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .aside {
    @include breakpoint(md) {
      width: grid-width(3.5);
      position: sticky;
      top: 6.4rem;
    }
  }
</style>

<script>
  export default {
    methods: {
      handleScroll() {
        const observerOptions = {
          root: null,
          threshold: 0,
          rootMargin: "0 0 -800px 0",
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
    mounted() {
      this.handleScroll()
    },
  }
</script>
