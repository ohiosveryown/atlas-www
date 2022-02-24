<template>
  <header>
    <h1 class="intro inter">Turn customer data into product innovation</h1>
    <h2 class="intro founders">
      Atlas is a blazingly fast, extensible, intelligent,<br />
      single source of truth for all your customer&nbsp;information.
    </h2>
    <figure class="intro">
      <a
        target="_blank"
        href="https://www.loom.com/share/cae56be74f1c49d8b972f0d9e0a97162"
      >
        <button class="play">
          <svg width="27" height="30" fill="none">
            <path
              opacity=".96"
              d="M25.354 12.74c1.542.9 1.542 3.128 0 4.027L4.344 29.023C2.79 29.93.839 28.81.839 27.01V2.498C.84.699 2.79-.422 4.344.485l21.01 12.256Z"
              fill="#fff"
            />
          </svg>
        </button>
      </a>
      <img
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645649721/atlas/ywlilhruxakdu2zublsc.png"
        alt="product video preview image"
      />
    </figure>
    <img
      class="mesh-02"
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645674527/atlas/tde4jszdhgjazn0zjpjb.png"
      alt="mesh gradient"
    />
  </header>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  header {
    text-align: center;
    margin-top: 6.4rem;
    @include breakpoint(md) {
      margin-top: 8rem;
    }
  }

  h1 {
    margin-bottom: 3.2rem;
    background: linear-gradient(to right, #0e2ae4 0%, #a056ff 68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 500;
    line-height: 1;
    @include breakpoint(md) {
      margin-bottom: 4rem;
      font-size: 6.4vw;
    }
  }

  h2 {
    margin-bottom: 4.8rem;
    font-size: 2.6rem;
    line-height: 1.1;
    opacity: 0.64;
    background: linear-gradient(to right, #fff 0%, #bbb 68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include breakpoint(md) {
      margin-bottom: 11.2rem;
      font-size: 2.8vw;
    }
  }

  figure {
    position: relative;
    z-index: var(--z2);
    margin: auto;
    box-shadow: 0px 5px 2.7px rgba(0, 0, 0, 0.102),
      0px 12.6px 6.9px rgba(0, 0, 0, 0.146),
      0px 25.7px 14.2px rgba(0, 0, 0, 0.184),
      0px 52.9px 29.2px rgba(0, 0, 0, 0.228), 0px 145px 80px rgba(0, 0, 0, 0.33);
    @include breakpoint(md) {
      width: grid-width(10);
    }
    img {
      pointer-events: none;
    }
    button {
      --size: 7.2rem;
      position: absolute;
      z-index: var(--zmax);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      border-radius: 100px;
      padding-top: 0.4rem;
      padding-left: 0.4rem;
      width: var(--size);
      height: var(--size);
      transition: transform 300ms ease;
      transform: scale(0.64);
      will-change: transform;
      background: linear-gradient(
        106.92deg,
        rgba(41, 66, 238, 0.24) 0%,
        rgba(160, 86, 255, 0.24) 98.96%
      );
      @include breakpoint(md) {
        transform: scale(1);
      }
    }

    button:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: var(--size);
      height: var(--size);
      transform: scale(2);
      border-radius: 100px;
      transition: transform 300ms ease;
      animation: pulse 2400ms linear infinite;
      background: linear-gradient(
        106.92deg,
        rgba(41, 66, 238, 0.24) 0%,
        rgba(160, 86, 255, 0.24) 98.96%
      );
    }
  }

  button:hover {
    @media (pointer: fine) {
      transform: scale(1.2);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      transform: scale(2);
      opacity: 1;
    }
    75% {
      transform: scale(3);
      opacity: 0.25;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }

  .mesh-02 {
    position: relative;
    z-index: var(--z1);
    margin: -14rem auto 0;
    transform: scale(0.25);
    @include breakpoint(md) {
      margin-top: -8rem;
      transform: scale(0.5);
    }
  }
</style>

<script>
  export default {
    methods: {
      introEnter() {
        gsap.from(".intro", {
          opacity: 0,
          duration: 1.2,
          delay: 0.75,
          stagger: 0.15,
          skewY: 10,
          y: 120,
          ease: Power4.easeOut,
        })
      },
    },
    mounted() {
      this.introEnter()
    },
  }
</script>
