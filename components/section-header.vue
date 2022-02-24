<template>
  <header>
    <h3 class="inter">
      {{ heading }}
      <span>easy</span>
      <img class="icon" :src="icon" alt="" />
    </h3>
    <h4 class="founders">
      {{ subheading }}
    </h4>
    <img :src="bg" alt="" class="bg" />
  </header>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  header {
    position: relative;
    margin: 0 auto 7.2rem;
    text-align: center;
  }

  h3 {
    position: relative;
    z-index: var(--z2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    font-size: 2.4rem;
    @include breakpoint(md) {
      font-size: 3.2vw;
    }
  }

  span {
    margin: 0 0.8vw;
  }

  h4 {
    position: relative;
    z-index: var(--z2);
    margin: auto;
    opacity: 0.64;
    line-height: 1.1;
    font-size: 2.4rem;
    @include breakpoint(md) {
      max-width: 46ch;
      font-size: 2.8vw;
    }
  }

  .icon {
    display: inline-flex;
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    @include breakpoint(md) {
      width: 4.2rem;
      height: 4.2rem;
    }
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    top: -12rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    transform: scale(0.75);
    pointer-events: none;
    @include breakpoint(md) {
      top: -32rem;
      transform: scale(0.5);
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading", "icon", "bg"],
  }
</script>
