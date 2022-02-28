<template>
  <div class="wrapper">
    <ul>
      <testimonial
        avatar="https://res.cloudinary.com/da32ufmnf/image/upload/v1645985924/atlas/grabla0mys0x7miebjrd.png"
        author="Luke Hamiltion"
        title="Sr. Software, magic.link"
        quote="With Atlas we've reached record new user growth."
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
    *:nth-of-type(1) {
      @include breakpoint(md) {
        animation: float01 5s ease-in-out infinite;
      }
    }

    *:nth-of-type(2) {
      @include breakpoint(md) {
        margin-left: 18vw;
        animation: float02 5s ease-in-out infinite;
      }

      @include breakpoint(mdl) {
        margin-left: 32vw;
      }
    }

    *:nth-of-type(3) {
      @include breakpoint(md) {
        animation: float03 5s ease-in-out 2s infinite;
        margin-left: 8vw;
      }

      @include breakpoint(mdl) {
        margin-left: 12vw;
      }
    }

    *:nth-of-type(4) {
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
