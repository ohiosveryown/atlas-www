<template>
  <ul class="parent">
    <li class="scroll-target one">1</li>

    <li class="scroll-target two">2</li>

    <card
      class="scroll-target card three"
      icon="📼"
      heading="pixel perfect replay"
      subheading="A video is worth a thousand words. Let your customers show you rather
      then tell you with session recording."
      product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668995137/atlas-refresh/index/p3k5m2qclpvpg2iqnl5w.png"
      bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
    />

    <li class="scroll-target four">4</li>

    <li class="scroll-target five">5</li>

    <card
      class="scroll-target card six"
      icon="🧠"
      heading="Smarter Insights"
      subheading="Convert your customer conversations into data driven insights, driving
      your product and engineering roadmaps."
      product="https://res.cloudinary.com/da32ufmnf/image/upload/v1668998043/atlas-refresh/index/hgivx3e0ar1mqas1obtv.png"
      bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
    />

    <li class="scroll-target seven">7</li>

    <li class="scroll-target eight">8</li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 28px;
    grid-row-gap: 28px;

    @include breakpoint(md) {
      margin: 6.4rem 0 12rem;
    }
  }

  li {
    border-radius: 20px;
    background: #090218;
    background: #14072f;

    @include breakpoint(md) {
      padding: 2rem;
    }
  }

  i {
    font-size: 2.8rem;
  }

  h3 {
    margin: 0.2rem 0 1rem;
    text-transform: capitalize;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #c7c3cd;
  }

  .one {
    @include breakpoint(md) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }

  .two {
    @include breakpoint(md) {
      grid-area: 1 / 2 / 3 / 3;
    }
  }

  .three {
    background: url("https://res.cloudinary.com/da32ufmnf/image/upload/v1668997074/atlas-refresh/index/pf6jwl8vkqdc6ozrc4sw.png")
      no-repeat center center;
    background-size: cover;
    @include breakpoint(md) {
      grid-area: 1 / 3 / 4 / 4;
      height: fit-content;
      margin-top: -9.2rem;
    }
  }

  .four {
    @include breakpoint(md) {
      grid-area: 4 / 3 / 6 / 4;
    }
  }

  .five {
    @include breakpoint(md) {
      grid-area: 3 / 1 / 5 / 3;
    }
  }

  .six {
    background: url("https://res.cloudinary.com/da32ufmnf/image/upload/v1668997224/atlas-refresh/index/ausczy3mh1ouhwztp4wd.png")
      no-repeat center center;
    background-size: cover;
    @include breakpoint(md) {
      display: flex;
      flex-direction: column;
      grid-area: 1 / 4 / 4 / 6;
      margin-top: -19rem;
    }
  }

  .seven {
    @include breakpoint(md) {
      grid-area: 4 / 4 / 6 / 6;
    }
  }

  .eight {
    @include breakpoint(md) {
      grid-area: 4 / 4 / 7 / 6;
    }
  }
</style>

<script>
  export default {}
</script>
