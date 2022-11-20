<template>
  <div class="wrapper">
    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1668964719/atlas-refresh/index/msxozidgoo3gxhm0cvju.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    position: absolute;
    top: 0;
    z-index: var(--z0);

    @include breakpoint(md) {
      top: 44rem;
    }
  }
</style>

<script>
  export default {
    // methods: {
    //   introEnter() {
    //     gsap.from("nav", {
    //       opacity: 0,
    //       duration: 0.5,
    //       ease: Power4.easeOut,
    //     })
    //   },
    // },
    // mounted() {
    //   this.introEnter()
    // },
  }
</script>
