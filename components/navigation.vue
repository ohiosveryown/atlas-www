<template>
  <nav>
    <div class="width wrapper">
      <nuxt-link to="/">
        <logo class="logo" />
      </nuxt-link>

      <ul class="links">
        <li class="link">
          <nuxt-link to="/features">Features</nuxt-link>
        </li>

        <li class="link">
          <nuxt-link to="/pricing">Pricing</nuxt-link>
        </li>

        <li class="link">
          <nuxt-link to="/changelog">Changelog</nuxt-link>
        </li>

        <li class="link">
          <nuxt-link to="/about">About</nuxt-link>
        </li>

        <li class="rule" />

        <li class="link">
          <a href="https://app.getatlas.io/auth/login?next=/">Log In</a>
        </li>

        <li>
          <a href="https://app.getatlas.io/auth/signup"
            ><button class="button-primary">Sign Up</button></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  nav {
    --spacing: 2.8rem;
    display: flex;
    position: sticky;
    z-index: var(--zmax);
    top: 0;
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
    transition: all 300ms ease;

    @include breakpoint(md) {
      align-items: center;
      padding: 0;
      height: 48px;
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.24);
      background: linear-gradient(#05020d, rgba(5, 2, 13, 0.4));
      backdrop-filter: blur(22px);
    }
  }

  .links {
    display: flex;
    @include breakpoint(md) {
      flex-direction: row;
      align-items: center;
    }
  }

  .rule {
    position: relative;
    width: 1px;
    height: 18px;
    background: rgba(255, 255, 255, 0.56);
    pointer-events: none;
  }

  ul {
    display: flex;
    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  li {
    @include breakpoint(md) {
      margin-left: var(--spacing);
      transition: var(--ease);
    }
  }

  @media (pointer: fine) {
    .link:hover {
      opacity: 0.72;
    }

    button:hover {
      filter: hue-rotate(20deg);
    }
  }

  button {
    background: var(--gradient-brand);
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    transition: filter 300ms ease;

    @include breakpoint(md) {
      // height: 3.2rem;
      padding: 0.6rem 1.6rem 0.7rem;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    transform: scale(0.72) translateY(0.3rem);
    transform-origin: left;
  }

  a.nuxt-link-exact-active {
    color: #a5a5ff;
  }
</style>

<script>
  export default {
    methods: {
      introEnter() {
        gsap.from("nav", {
          opacity: 0,
          duration: 0.5,
          ease: Power4.easeOut,
        })
      },
    },
    mounted() {
      this.introEnter()
    },
  }
</script>
