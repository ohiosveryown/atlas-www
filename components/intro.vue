<template>
  <section>
    <header>
      <h1 class="enter inter">{{ heading }}</h1>
      <h2 class="enter founders">
        {{ subheading }}
      </h2>
    </header>
    <div>
      <figure class="enter">
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
        class="enter mesh-02"
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645674527/atlas/tde4jszdhgjazn0zjpjb.png"
        alt="mesh gradient"
      />

      <a target="_blank" href="https://calendly.com/jon-obryan/30min">
        <div class="enter signup">
          <span class="inter">Schedule a Demo</span>
          <button class="inter">Book Time</button>
        </div>
      </a>
    </div>
  </section>
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
    font-size: 3.3rem;
    font-weight: 500;
    line-height: 1;
    @include breakpoint(md) {
      margin-bottom: 4rem;
      font-size: 6.4vw;
    }

    @include breakpoint(lg) {
      margin-bottom: 4rem;
      font-size: 5.5vw;
    }
  }

  h2 {
    margin: 0 auto 4.8rem;
    font-size: 2.6rem;
    line-height: 1.1;
    opacity: 0.64;
    @include breakpoint(md) {
      max-width: 40ch;
      margin-bottom: 8rem;
      font-size: 2.8vw;
    }

    @include breakpoint(lg) {
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
      margin-top: -14rem;
      transform: scale(0.5);
    }
  }

  .signup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: -8rem auto 8rem;
    padding: 1.4rem 2.4rem;
    width: max-content;
    text-align: center;
    font-size: 1.8rem;
    @include breakpoint(md) {
      margin-top: 0;
      margin-bottom: 19.2rem;
      padding: 1.6rem 2.8rem;
      font-size: 2.2rem;
    }

    button {
      margin-left: 6vw;
      padding: 1.2rem 2.8rem;
      font-size: 0.8em;
      color: #7f7fff;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.12);
      transition: all 300ms ease;
      cursor: pointer;
      @include breakpoint(md) {
        margin-left: 12vw;
        font-size: 1.6rem;
      }

      &:hover {
        @media (pointer: fine) {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  .signup::before {
    content: "";
    position: absolute;
    z-index: var(--zmin);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 1px;
    background: linear-gradient(45deg, #2942ee, #a056ff);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
</style>

<script>
  export default {
    props: ["heading", "subheading"],
    methods: {
      enter() {
        gsap.from(".enter", {
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
      this.enter()
    },
  }
</script>
