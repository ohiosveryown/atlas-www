<template>
  <div class="wrapper">
    <article>
      <header class="inter">{{ heading }}</header>
      <p>{{ subheading }}</p>
      <ul>
        <li>
          <img class="icon" :src="icon01" alt="" />
          <span class="op-8">{{ liOne }}</span>
        </li>

        <li>
          <img class="icon" :src="icon02" alt="" />
          <span class="op-8">{{ liTwo }}</span>
        </li>

        <li>
          <img class="icon" :src="icon03" alt="" />
          <span class="op-8">{{ liThree }}</span>
        </li>
      </ul>
    </article>
    <img class="mesh" :src="mesh" />
    <img class="product" :src="product" alt="" />
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    display: flex;
    position: relative;
    z-index: var(--z4);
    flex-direction: column;
    margin-bottom: 4.2rem;
    border-radius: 16px;
    padding: 4.2rem 2.4rem;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 4px 36px 6px rgba(38, 38, 38, 0.96);
    background-blend-mode: difference;
    background: linear-gradient(
      106.92deg,
      rgba(5, 15, 85, 0.28) 21.58%,
      rgba(221, 86, 255, 0.28) 98.96%
    );
    @include breakpoint(md) {
      padding: 5.6rem 4.8rem;
      flex-direction: row;
      justify-content: space-between;
      padding: 5.6rem 6.4rem;
    }
  }

  header {
    margin-bottom: 1.6rem;
    font-size: 2.6rem;
    line-height: 1.2;
    @include breakpoint(md) {
      font-size: 2.4vw;
    }
    @include breakpoint(mdl) {
      font-size: 2vw;
    }
  }

  p {
    margin-bottom: 3.2rem;
    max-width: 47ch;
    opacity: 0.72;
    font-size: 1.7rem;
    @include breakpoint(lg) {
      font-size: 1.5vw;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    @include breakpoint(md) {
      margin-bottom: 2.4rem;
      font-size: 1.5vw;
    }
    @include breakpoint(lg) {
      margin-bottom: 3.2rem;
    }
  }

  .icon {
    margin-right: 1.2rem;
    width: 4.2rem;
    height: 4.2rem;
  }

  .product {
    margin-top: 4rem;
    pointer-events: none;
    filter: drop-shadow(8px 28px 32px rgba(0, 0, 0, 0.5));
    @include breakpoint(md) {
      margin-top: 0;
      padding-left: 4.8rem;
      align-self: center;
      max-width: 52%;
    }
    @include breakpoint(mdl) {
      align-self: center;
      padding-left: 2rem;
      max-width: 52%;
    }
    @include breakpoint(lg) {
      padding-left: 4.8rem;
      max-width: 52%;
    }
  }

  .mesh {
    position: absolute;
    z-index: var(--z0);
    top: 0rem;
    right: 0rem;
    opacity: 0.64;
    transform: scale(2);
    pointer-events: none;
    @include breakpoint(md) {
      transform: scale(1);
      top: -20rem;
      right: -40rem;
    }
    @include breakpoint(lg) {
      right: -80rem;
    }
  }
</style>

<script>
  export default {
    props: [
      "icon01",
      "icon02",
      "icon03",
      "mesh",
      "product",
      "heading",
      "subheading",
      "liOne",
      "liTwo",
      "liThree",
    ],
  }
</script>
