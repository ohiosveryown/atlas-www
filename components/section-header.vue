<template>
  <header>
    <h3 class="inter">
      {{ heading }}
      <span>{{ highlight }} <img class="icon" :src="icon" alt="" /></span>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    padding-bottom: 0.4rem;
    font-size: 2.4rem;
    @include breakpoint(md) {
      flex-direction: row;
      font-size: 3.2vw;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        margin-left: 0.75vw;
      }
    }
  }

  span {
    margin: 0 1.5vw;
    @include breakpoint(md) {
      margin: 0 0.8vw;
    }
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
    pointer-events: none;
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
    /*     animation: rotateSm 32s linear infinite; */
    @include breakpoint(md) {
      /*       animation: rotateMd 32s linear infinite; */
      top: -32rem;
      transform: scale(0.5);
    }
  }

  @keyframes rotateSm {
    from {
      transform: scale(0.75) rotate(0);
    }
    to {
      transform: scale(0.75) rotate(360deg);
    }
  }

  @keyframes rotateMd {
    from {
      transform: scale(0.5) rotate(0);
    }
    to {
      transform: scale(0.5) rotate(360deg);
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading", "highlight", "icon", "bg"],
  }
</script>
