<template>
  <li class="wrapper">
    <header>
      <i>{{ icon }}</i>
      <h3 class="inter">
        {{ heading }}
      </h3>
    </header>
    <p>
      {{ subheading }}
    </p>
    <img class="product" :src="product" alt="" />
    <figure class="bg">
      <img :src="bg" alt="" />
    </figure>
  </li>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  li {
    position: relative;
    border-radius: 20px;
    background: #090218;
    background: #14072f;
    overflow: hidden;
  }

  i {
    position: relative;
    z-index: var(--z2);
    font-size: 3rem;
    font-style: normal;
  }

  h3 {
    position: relative;
    z-index: var(--z2);
    margin: 0.4rem 0 1rem;
    text-transform: capitalize;

    @include breakpoint(md) {
      font-size: 2rem;
    }
  }

  p {
    position: relative;
    z-index: var(--z2);
    margin-bottom: 2rem;
    font-size: 1.8rem;
    opacity: 0.72;
  }

  .product {
    position: relative;
    z-index: var(--z2);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z1);
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
    props: ["icon", "heading", "subheading", "product", "bg"],
  }
</script>
