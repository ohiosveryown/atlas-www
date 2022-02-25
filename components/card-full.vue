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
        A video is worth a million words. Let your customers show you rather
        than tell you.
      </p>

      <ul>
        <li>
          <header>Map the full user journey</header>
          <p>
            From entry to exit, you can reliably map the user’s full experience.
          </p>
        </li>

        <li>
          <header>Custom events</header>
          <p>See the whole conversation with your customers.</p>
        </li>

        <li>
          <header>Fast forward</header>
          <p>See the whole conversation with your customers.</p>
        </li>
      </ul>
    </article>

    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645807740/atlas/jyrhou7i4jv2anozgidx.png"
      alt=""
      class="product"
    />

    <!--     <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645808336/atlas/n4sovunhp3qnpslk4weo.png"
      alt=""
      class="mesh"
    /> -->
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .wrapper {
    position: relative;
    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
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
      margin-bottom: 2rem;
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
      margin-top: -0.5rem;
    }
  }

  .product {
    box-shadow: 0px 6.7px 5.3px rgba(0, 0, 0, 0.133),
      0px 22.3px 17.9px rgba(0, 0, 0, 0.197), 0px 100px 80px rgba(0, 0, 0, 0.33);

    @include breakpoint(md) {
      width: grid-width(5.5);
      height: auto;
      object-fit: scale-down;
    }

    @include breakpoint(lg) {
      width: grid-width(6);
    }
  }

  .mesh {
    position: absolute;
    z-index: var(--z-1);
    top: 0;
    right: 0;
  }
</style>

<script>
  export default {
    props: ["heading", "subheading", "icon", "product", "bg"],
  }
</script>
