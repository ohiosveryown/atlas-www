<template>
  <div class="wrapper">
    <img class="icon" :src="icon" alt="" />
    <header class="inter">{{ heading }}</header>
    <p>
      {{ subheading }}
    </p>
    <img class="product" :src="product" alt="" />
    <figure class="bg">
      <img :src="bg" alt="" />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    position: relative;
    z-index: var(--z1);
    border-radius: 16px;
    margin-bottom: 3.2rem;
    padding: 3.2rem 2.4rem 0;
    box-shadow: var(--elevation);
    overflow: hidden;
    @include breakpoint(md) {
      padding: 3.2rem 3.2rem 0;
    }
  }

  .icon {
    margin-bottom: 2.2rem;
    width: 4.2rem;
    height: 4.2rem;
    pointer-events: none;
  }

  header {
    margin-bottom: 1.2rem;
    font-size: 2.2rem;
    @include breakpoint(md) {
      font-size: 2.4vw;
    }
    @include breakpoint(mdl) {
      font-size: 2vw;
    }
  }

  p {
    margin-bottom: 4rem;
    opacity: 0.72;
    font-size: 1.7rem;
    @include breakpoint(lg) {
      max-width: 48ch;
      font-size: 1.5vw;
    }
  }

  .product {
    pointer-events: none;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z0);
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.64;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center bottom;
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading", "icon", "product", "bg"],
  }
</script>
