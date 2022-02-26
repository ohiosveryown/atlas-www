<template>
  <div class="wrapper">
    <article>
      <header class="heading inter">
        Pixel perfect<br />
        <span class="pink"
          >session replay
          <img
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645807362/atlas/n4oulbhaobyp0agptvan.png"
            alt=""
            class="icon"
        /></span>
      </header>
      <p class="subheading founders">
        A video is worth a thousands words. Let your customers show you rather
        than tell you.
      </p>

      <ul>
        <li>
          <header class="inter">Map the full user journey</header>
          <p>
            From entry to exit, you can reliably map the user’s full experience.
          </p>
        </li>

        <li>
          <header class="inter">Custom events</header>
          <p>See the whole conversation with your customers.</p>
        </li>

        <li>
          <header class="inter">Fast forward</header>
          <p>See the whole conversation with your customers.</p>
        </li>
      </ul>
    </article>

    <div class="figure">
      <img
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645850152/atlas/snraz8kocgommsr7kpds.png"
        alt=""
        class="product"
      />

      <img
        src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645844209/atlas/bza9stfzsplif3iwbgny.png"
        alt=""
        class="mesh"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    position: relative;
    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  article {
    margin-bottom: 4.8rem;
    @include breakpoint(md) {
      margin-bottom: 0;
      width: grid-width(5.5);
    }
    @include breakpoint(lg) {
      width: grid-width(5.5);
    }
  }

  .heading {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    line-height: 1.2;
    @include breakpoint(md) {
      line-height: 1.1;
      font-size: 3.2vw;
    }
    @include breakpoint(lg) {
      margin-bottom: 3.2rem;
    }
  }

  .subheading {
    margin-bottom: 1.2rem;
    opacity: 0.64;
    line-height: 1.1;
    font-size: 2.4rem;
    @include breakpoint(md) {
      max-width: 46ch;
      font-size: 2.8vw;
    }
    @include breakpoint(lg) {
      margin-bottom: 2.8rem;
      line-height: 0.92;
    }
  }

  li {
    margin-bottom: 2.4rem;

    p {
      opacity: 0.72;
      font-size: 1.7rem;

      @include breakpoint(lg) {
        max-width: 32ch;
        font-size: 1.4vw;
        line-height: 1.2;
      }
    }
  }

  header {
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    @include breakpoint(md) {
      margin-bottom: 0.4rem;
      font-size: 2.4vw;
    }
    @include breakpoint(mdl) {
      font-size: 1.6vw;
    }
  }

  .icon {
    display: inline-flex;
    width: 3.2rem;
    height: 3.2rem;
    pointer-events: none;
    @include breakpoint(md) {
      width: 4.2rem;
      height: 4.2rem;
    }
  }

  .figure {
    position: relative;
    @include breakpoint(md) {
      width: grid-width(5.5);
    }

    @include breakpoint(lg) {
      width: grid-width(6);
    }
  }

  .product {
    position: relative;
    z-index: var(--z2);
    box-shadow: 0px 6.7px 5.3px rgba(0, 0, 0, 0.133),
      0px 22.3px 17.9px rgba(0, 0, 0, 0.197), 0px 100px 80px rgba(0, 0, 0, 0.33);

    @include breakpoint(md) {
      height: auto;
      object-fit: scale-down;
    }
  }

  .mesh {
    position: absolute;
    top: -10rem;
    @include breakpoint(md) {
      top: -20rem;
      transform: scale(1.1);
    }
  }
</style>

<script>
  export default {
    props: ["heading", "subheading", "icon", "product", "bg"],
  }
</script>
