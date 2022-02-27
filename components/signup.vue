<template>
  <div class="wrapper">
    <header>
      <div class="headings">
        <span class="inter heading">{{ headingOne }}</span>
        <span class="inter heading">{{ headingTwo }}</span>
      </div>
      <span class="founders subheading">{{ subheading }}</span>
    </header>
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
    border-radius: 18px;
    border: 1px solid #6363ff;
    text-align: center;
    padding: 6.4rem 2rem;
    background: linear-gradient(
      90deg,
      #040321 0%,
      rgba(9, 11, 81, 0.490216) 50.98%,
      #06033a 100%
    );
  }

  header {
    display: flex;
    flex-direction: column;
    /*     background: url("https://res.cloudinary.com/da32ufmnf/image/upload/v1645989915/atlas/zedgbhejc60e4snshghg.png")
      no-repeat center center; */
    @include breakpoint(md) {
      padding: 8rem 0;
    }
  }

  .headings {
    margin: 0 auto 1.6rem;
    display: flex;
    flex-direction: column;
    @include breakpoint(md) {
      flex-direction: row;
      margin-bottom: 2.4rem;
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
    margin: auto;
    opacity: 0.72;
    line-height: 1.1;
    font-size: 2.3rem;
    @include breakpoint(md) {
      max-width: 44ch;
      font-size: 2vw;
    }
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    bottom: 0;
  }
</style>

<script>
  export default {
    props: ["headingOne", "headingTwo", "subheading"],
  }
</script>
