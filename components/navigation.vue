<template>
  <nav>
    <div class="width wrapper">
      <logo />
      <div class="buttons">
        <a href="https://app.getatlas.io/auth/login?next=/">Log In</a>
        <button class="primary">Sign Up</button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  nav {
    position: sticky;
    z-index: var(--zmax);
    top: 0;
    padding: 1.2rem 0;
    transition: all 300ms ease;
    @include breakpoint(md) {
      padding: 2rem 0;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    margin-top: -0.8rem;
    transform: scale(0.88);
    transform-origin: left;
    @include breakpoint(md) {
      margin-top: 0;
      transform: scale(1);
    }
  }

  button {
    margin-left: 2.4rem;
    padding: 1.6rem 2.4rem;
    border-radius: 100px;
    background: linear-gradient(106deg, #2942ee 0%, #a056ff 98%);
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    transition: filter 300ms ease;
    will-change: filter;
    @include breakpoint(md) {
      font-size: 1.5rem;
    }
  }

  a {
    font-size: 1.5rem;
  }

  @media (pointer: fine) {
    a:hover {
      text-decoration: underline;
    }
    button:hover {
      filter: hue-rotate(20deg);
    }
  }

  .nav-active {
    background: linear-gradient(180deg, #05020d 0%, rgba(5, 2, 13, 0) 100%);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    @include breakpoint(md) {
      padding: 1.2rem 0;
    }
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

      handleScroll() {
        let scrollpos = window.scrollY
        const header = document.querySelector("nav")
        const header_height = header.offsetHeight

        const add_class_on_scroll = () => header.classList.add("nav-active")
        const remove_class_on_scroll = () =>
          header.classList.remove("nav-active")

        window.addEventListener("scroll", function () {
          scrollpos = window.scrollY

          if (scrollpos > 10) {
            add_class_on_scroll()
          } else {
            remove_class_on_scroll()
          }
        })
      },
    },
    mounted() {
      this.introEnter()
      this.handleScroll()
    },
  }
</script>
