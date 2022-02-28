<template>
  <div class="wrapper">
    <header>
      <div class="headings">
        <span class="inter heading one">{{ headingOne }}</span>
        <span class="inter heading">{{ headingTwo }}</span>
      </div>
      <span class="founders subheading">{{ subheading }}</span>
    </header>

    <button>Sign Up</button>

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
      margin-bottom: 20rem;
    }

    @include breakpoint(lg) {
      width: 80%;
    }
  }

  header {
    display: flex;
    flex-direction: column;
  }

  .headings {
    position: relative;
    z-index: var(--z2);
    margin: 0 auto 1.6rem;
    display: flex;
    flex-direction: column;
    @include breakpoint(md) {
      flex-direction: row;
      margin-bottom: 1rem;
    }

    @include breakpoint(mdl) {
      margin-bottom: 2.4rem;
    }
  }

  .one {
    @include breakpoint(md) {
      margin-right: 0.6rem;
    }
  }

  .heading {
    font-size: 2.6rem;
    line-height: 1.1;
    @include breakpoint(md) {
      font-size: 2.4vw;
    }
  }

  .subheading {
    margin: 0 auto 2.4rem;
    opacity: 0.72;
    line-height: 1.1;
    font-size: 2.3rem;
    @include breakpoint(md) {
      max-width: 44ch;
      font-size: 2.4vw;
    }
    @include breakpoint(mdl) {
      font-size: 2.6rem;
    }
    @include breakpoint(lg) {
      font-size: 2vw;
    }
  }

  button {
    position: relative;
    z-index: var(--z2);
    padding: 1.6rem 4rem;
    width: 56%;
    border-radius: 100px;
    background: linear-gradient(106deg, #2942ee 0%, #a056ff 98%);
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    transition: filter 300ms ease;
    will-change: filter;

    @include breakpoint(md) {
      width: max-content;
      padding: 1.6rem 4rem;
    }

    @include breakpoint(mdl) {
      padding: 1.6rem 4rem;
      font-size: 1.6rem;
    }

    @include breakpoint(lg) {
      padding: 2rem 4rem;
      font-size: 2rem;
    }
  }

  @media (pointer: fine) {
    .wrapper:hover {
      transform: scale(1.01);
    }
    button:hover {
      filter: hue-rotate(20deg);
    }
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    bottom: 0;
    pointer-events: none;
  }
</style>

<script>
  export default {
    props: ["headingOne", "headingTwo", "subheading"],
  }
</script>
