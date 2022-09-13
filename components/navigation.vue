<template>
  <nav>
    <div class="width wrapper">
      <logo />
      <div class="buttons">
        <a
          class="blog-link"
          target="_blank"
          href="https://medium.com/atlas-support"
          @click="trackOpenBlog"
          >Blog</a
        >
        <a href="https://app.getatlas.io/auth/login?next=/" @click="trackLogIn">Log In</a>
        <a class="sign-up" href="https://app.getatlas.io/auth/signup" @click="trackSignUp">Sign Up</a>
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

  .sign-up {
    display: inline-block;
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
  .sign-up:hover {
    text-decoration: none;
  }
  .sign-up:focus {
    outline: none;
  }

  a {
    font-size: 1.5rem;
  }

  @media (pointer: fine) {
    a:hover {
      text-decoration: underline;
    }
    .sign-up:hover {
      filter: hue-rotate(20deg);
    }
  }

  .blog-link {
    display: none;
    @include breakpoint(md) {
      display: inline-flex;
      margin-right: 2.4rem;
    }
  }

  .nav-active {
    background: linear-gradient(180deg, #05020d 0%, rgba(5, 2, 13, 0) 100%);
    backdrop-filter: blur(12px);
    /*     border-bottom: 1px solid rgba(0, 0, 255, 0.12); */
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
      trackLogIn() {
        this.$ga.event('interactions', 'log-in')
      },
      trackSignUp() {
        this.$ga.event('conversions', 'sign-up', 'header')
      },
      trackOpenBlog() {
        this.$ga.event('interactions', 'open-blog')
      },
    },
    mounted() {
      this.introEnter()
      this.handleScroll()
    },
  }
</script>
