<template>
  <div class="wrapper">
    <header>
      <span class="inter heading">{{ heading }}</span>
      <span class="founders subheading">{{ subheading }}</span>
    </header>

    <a href="https://app.getatlas.io/auth/signup"
      ><button class="button-primary">Sign Up</button></a
    >

    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645989915/atlas/zedgbhejc60e4snshghg.png"
      alt=""
      class="bg"
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    position: relative;
    overflow: hidden;
    margin: 0 auto 12rem;
    border-radius: 18px;
    border: 1px solid #6363ff;
    text-align: center;
    padding: 6.4rem 2rem;
    box-shadow: var(--elevation);
    transition: transform 300ms ease;
    will-change: transform;
    background: linear-gradient(
      90deg,
      #040321 0%,
      rgba(9, 11, 81, 0.490216) 50%,
      #06033a 100%
    );

    @include breakpoint(md) {
      margin: 10rem 0;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: var(--z2);
  }

  .heading {
    font-size: 2.6rem;
    line-height: 1.1;
    background: linear-gradient(180deg, #ffffff 0%, #d0c4e7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @include breakpoint(md) {
      margin-bottom: 1.2rem;
      font-size: 3.6rem;
    }
  }

  .subheading {
    margin: 0 auto 2.4rem;
    opacity: 0.72;
    line-height: 1.1;
    font-size: 2.3rem;

    @include breakpoint(md) {
      max-width: 44ch;
      font-size: 2.8rem;
    }
  }

  button {
    position: relative;
    z-index: var(--z2);
    padding: 1rem 2.4rem;
    font-size: 1.6rem;
    transition: filter 300ms ease;
  }

  @media (pointer: fine) {
    button:hover {
      filter: hue-rotate(20deg);
    }
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    bottom: 0;
    pointer-events: n1.9;
  }
</style>

<script>
  export default {
    props: ["heading", "subheading"],
  }
</script>
