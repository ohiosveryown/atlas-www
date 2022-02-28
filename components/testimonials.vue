<template>
  <div class="wrapper">
    <header>
      <h3 class="inter">
        Trusted by
        <span
          >trailblazers
          <img
            class="icon"
            src="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985210/atlas/kenyqx0zj4hatsqnh1dq.png"
            alt=""
        /></span>
      </h3>
      <h4 class="founders">
        We've helped companies both large and small connect with their
        customers, and are backed by <span class="color">YCombinator</span>.
      </h4>
      <img :src="bg" alt="" class="bg" />
    </header>
    <ul>
      <testimonial
        avatar="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985924/atlas/grabla0mys0x7miebjrd.png"
        author="Brian Bishop"
        title="Pigeon Loans"
        quote="...it's smooth, real, real smooth"
      />

      <testimonial
        avatar="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985924/atlas/grabla0mys0x7miebjrd.png"
        author="Luke Hamiltion"
        title="Sr. Software, magic.link"
        quote="Atlas was easy to implement and since doing so, we’ve seen our conversion rate skyrocket to over 95%!"
      />

      <testimonial
        avatar="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985924/atlas/grabla0mys0x7miebjrd.png"
        author="Luke Hamiltion"
        title="Sr. Software, magic.link"
        quote="Atlas is a total gamechanger!"
      />

      <testimonial
        avatar="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985924/atlas/grabla0mys0x7miebjrd.png"
        author="Luke Hamiltion"
        title="Sr. Software, magic.link"
        quote="All the features of FullStory at half the price."
      />
    </ul>
  </div>
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
    line-height: 1.1;
    font-size: 2.4rem;
    color: #a4a2aa;
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

  .color {
    margin: 0;
    background: linear-gradient(to right, #d45f29 0%, #f1ad57 76%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .wrapper {
    margin-bottom: 11.2rem;
    @include breakpoint(md) {
      margin-bottom: 16rem;
    }

    @include breakpoint(lg) {
      margin-bottom: 21.2rem;
    }
  }

  ul {
    li:nth-of-type(1) {
      @include breakpoint(md) {
        animation: float01 5s ease-in-out infinite;
      }
    }

    li:nth-of-type(2) {
      @include breakpoint(md) {
        margin-left: 18vw;
        animation: float02 5s ease-in-out infinite;
      }

      @include breakpoint(mdl) {
        margin-left: 32vw;
      }
    }

    li:nth-of-type(3) {
      @include breakpoint(md) {
        animation: float03 5s ease-in-out 2s infinite;
        margin-left: 8vw;
      }

      @include breakpoint(mdl) {
        margin-left: 12vw;
      }
    }

    li:nth-of-type(4) {
      @include breakpoint(md) {
        margin-left: 26vw;
      }

      @include breakpoint(mdl) {
        margin: -4vw 0 0 46vw;
        animation: float02 5s ease-in-out 2s infinite;
      }
      @include breakpoint(lg) {
        margin-left: 64vw;
      }
    }
  }

  li {
    margin-bottom: 8rem;
    @include breakpoint(md) {
      margin-bottom: 0;
    }
  }

  @keyframes float01 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-0.2rem, -0.8rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes float02 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0.3rem, 0.6rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes float03 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-0.2rem, -0.8rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>

<script>
  export default {}
</script>
