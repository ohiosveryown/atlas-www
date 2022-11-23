<template>
  <div>
    <navigation />
    <nuxt />
    <footer class="debug tac space">footer</footer>
  </div>
</template>

<style lang="scss">
  @import "~static/style/grid.scss";

  .app-feature {
    .page-header {
      @include breakpoint(md) {
        margin: 0 auto 2.4rem;
        width: grid-width(6);
      }
    }

    main {
      position: relative;
      margin: 0 auto;
      @include breakpoint(mdl) {
        margin-top: 9.6rem;
      }
    }

    .icon {
      margin: 6.4rem auto 2.4rem;
      width: 88px;
    }

    .hero {
      * {
        border-radius: 8px;
      }
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      padding: 6.4rem;
      background: linear-gradient(
        252deg,
        rgba(19, 15, 35, 0.88) 0%,
        rgba(69, 58, 104, 0.88) 47.19%,
        rgba(38, 32, 52, 0.88) 98%
      );

      @include breakpoint(md) {
        margin-bottom: 5.6rem;
      }
    }

    .hero-crop {
      @include breakpoint(md) {
        max-height: 56rem;
      }

      @include breakpoint(lg) {
        max-height: 64rem;
      }
    }

    article {
      margin: 0 auto 4rem;
      @include breakpoint(md) {
        width: grid-width(7.2);
      }
    }

    header {
      margin-bottom: 1.2rem;
      font-size: 2.2rem;
    }

    p {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.88);
      margin-bottom: 1.2rem;
    }
  }
</style>

<script>
  export default {}
</script>
