<template>
  <nav class="width">
    <svg width="120" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M58.774 23.957H49.6l-1.811 4.954h-4.134l8.271-22.545h4.525l8.271 22.545H60.59l-1.815-4.954Zm-1.357-3.717-3.23-8.793-3.23 8.793h6.46ZM75.8 16.524h-3.616v12.383H68.21V16.524h-2.553v-3.682h2.553V8.08h3.974v4.762H75.8v3.682ZM82.328 28.907h-3.973V8.08h3.973v20.827ZM93.2 12.644c2.812 0 5.01 1.46 5.846 3.302l.227-2.987h3.782v16.065h-3.782l-.227-2.986c-.84 1.84-3.039 3.3-5.846 3.3-4.685 0-8.111-3.747-8.111-8.35 0-4.605 3.426-8.344 8.11-8.344Zm.676 13.022c2.776 0 4.747-2.13 4.747-4.666 0-2.536-1.97-4.665-4.747-4.665-2.812 0-4.814 2.13-4.814 4.665 0 2.536 2.007 4.666 4.814 4.666ZM109.985 24.049c.227 1.141 1.486 1.906 3.426 1.906 1.357 0 2.585-.476 2.585-1.46 0-1.268-1.291-1.526-4.588-2.571-2.776-.827-4.88-2.16-4.88-4.762 0-2.89 2.941-4.635 6.042-4.635 4.04 0 6.46 2.221 6.558 4.924h-3.973c-.098-1.177-1.389-1.684-2.456-1.684-1.001 0-2.198.477-2.198 1.395 0 1.015 1.161 1.238 4.618 2.414 3.617 1.206 4.881 2.951 4.881 5.015 0 2.986-2.972 4.635-6.687 4.635-4.134 0-7.075-1.714-7.302-5.177h3.974Z"
        fill="#fff"
      />
      <path
        d="m26.557 26.087-6.416-6.301-6.411 6.3c-1.584 1.557-4.156 1.557-5.744 0a9.895 9.895 0 0 0 6.932 2.82h10.447a9.895 9.895 0 0 0 6.932-2.82 4.11 4.11 0 0 1-5.74 0Z"
        stroke="url(#a)"
        stroke-width="1.923"
        stroke-miterlimit="10"
      />
      <path
        d="M7.986 26.087s.098.096.267.236c-.089-.079-.182-.153-.267-.236Z"
        stroke="url(#b)"
        stroke-width="1.923"
        stroke-miterlimit="10"
      />
      <path
        d="M32.296 26.087c-.084.083-.178.157-.267.236.174-.14.267-.236.267-.236Z"
        stroke="url(#c)"
        stroke-width="1.923"
        stroke-miterlimit="10"
      />
      <path
        d="m20.15 1.543-.009-.008-18.566 18.25 6.411 6.302a3.58 3.58 0 0 0 .33.288 4.111 4.111 0 0 0 5.414-.288l1.29-1.268c-1.748-1.44-2.865-3.604-2.865-6.021 0-4.338 3.577-7.85 7.986-7.85 4.41 0 7.991 3.516 7.991 7.854 0 2.418-1.112 4.578-2.865 6.02l1.29 1.269a4.111 4.111 0 0 0 5.415.288c.018-.013.035-.026.049-.043.093-.079.187-.158.276-.245l6.398-6.288.017-.017L20.15 1.543Z"
        stroke="url(#d)"
        stroke-width="1.923"
        stroke-miterlimit="10"
      />
      <defs>
        <linearGradient
          id="a"
          x1="7.2"
          y1="24.12"
          x2="33.085"
          y2="24.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2942EE" />
          <stop offset="1" stop-color="#928BFF" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="7.201"
          y1="26.233"
          x2="9.01"
          y2="26.233"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2942EE" />
          <stop offset="1" stop-color="#928BFF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="31.274"
          y1="26.234"
          x2="33.085"
          y2="26.234"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2942EE" />
          <stop offset="1" stop-color="#928BFF" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="0"
          y1="14.174"
          x2="40.285"
          y2="14.174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2942EE" />
          <stop offset="1" stop-color="#928BFF" />
        </linearGradient>
      </defs>
    </svg>
    <div class="buttons">
      <a href="https://app.getatlas.io/auth/login?next=/">Log In</a>
      <button class="primary">Sign Up</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  nav {
    display: flex;
    position: sticky;
    z-index: var(--zmax);
    top: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 3.2rem;
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
</style>

<script>
  export default {
    methods: {
      introEnter() {
        gsap.from("nav", {
          opacity: 0,
          duration: 1,
          delay: 0.25,
          ease: Power4.easeOut,
        })
      },
    },
    mounted() {
      this.introEnter()
    },
  }
</script>
