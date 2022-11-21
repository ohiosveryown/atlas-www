<template>
  <ul class="parent">
    <li class="li1">1</li>
    <li class="li2">2</li>
    <li class="li3">
      <header>
        <i>📼</i>
        <h3 class="inter">pixel perfect replay</h3>
      </header>
      <p>
        A video is worth a thousand words. Let your customers show you rather
        than tell you with session recording.
      </p>
      <img
        class="disable"
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1668995137/atlas-refresh/index/p3k5m2qclpvpg2iqnl5w.png"
        alt="session recording preview"
      />
    </li>
    <li class="li4">4</li>
    <li class="li5">5</li>
    <li class="li6">6</li>
    <li class="li7">7</li>
    <li class="li8">8</li>
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
  }

  li {
    border-radius: 20px;
    background: #090218;

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
    margin-bottom: 2.8rem;
    font-size: 1.8rem;
    opacity: 0.72;
  }

  .li1 {
    @include breakpoint(md) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }
  .li2 {
    @include breakpoint(md) {
      grid-area: 1 / 2 / 3 / 3;
    }
  }
  .li3 {
    @include breakpoint(md) {
      grid-area: 1 / 3 / 4 / 4;
    }
  }
  .li4 {
    @include breakpoint(md) {
      grid-area: 4 / 3 / 6 / 4;
    }
  }
  .li5 {
    @include breakpoint(md) {
      grid-area: 3 / 1 / 5 / 3;
    }
  }
  .li6 {
    @include breakpoint(md) {
      grid-area: 1 / 4 / 4 / 6;
    }
  }
  .li7 {
    @include breakpoint(md) {
      grid-area: 4 / 4 / 6 / 6;
    }
  }
  .li8 {
    @include breakpoint(md) {
      grid-area: 4 / 4 / 7 / 6;
    }
  }
</style>

<script>
  export default {}
</script>
