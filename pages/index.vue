<template>
  <div class="app">
    <img
      class="mesh mesh-01"
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645674527/atlas/wlzmlix0m0xksjk4pihj.png"
      alt="mesh gradient"
    />
    <navigation />
    <main class="width">
      <intro />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .mesh {
    pointer-events: none;
  }

  .mesh-01 {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

<script>
  export default {}
</script>
