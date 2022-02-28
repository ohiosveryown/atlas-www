<template>
  <div class="wrapper">
    <img class="icon" :src="icon" alt="" />
    <header class="inter">
      {{ heading }}
      <!--       <small class="tag">Coming Soon</small> -->
    </header>
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
    display: flex;
    align-content: center;
    margin-bottom: 1.2rem;
    font-size: 2.2rem;
    @include breakpoint(md) {
      font-size: 2.4vw;
    }
    @include breakpoint(mdl) {
      font-size: 2vw;
    }
  }

  .tag {
    align-self: center;
    margin: 0 0 0 1.2rem;
    display: block;
    padding: 0.6rem 1rem;
    border: 0.5px solid rgba(255, 255, 255, 0.24);
    border-radius: 100px;
    font-family: var(--system-ui);
    font-size: 1.1rem;
    background: rgba(255, 255, 255, 0.14);
    @include breakpoint(md) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-bottom: 4rem;
    opacity: 0.72;
    font-size: 1.7rem;
    @include breakpoint(md) {
      margin-bottom: 3.2rem;
    }
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
