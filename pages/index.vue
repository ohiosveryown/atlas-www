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
      <section>
        <section-header
          class="green hide--sm"
          heading="Onboarding made"
          icon="https://res.cloudinary.com/da32ufmnf/image/upload/v1645721930/atlas/yuragpqjv0ldyzwxnput.png"
          bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645725400/atlas/akiielqlt2mojbtt7zfy.png"
          subheading="Seamlessly import your existing customer data with our contact migration
        tool and be up and running in no time."
        />
        <card-wide />
      </section>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iure amet
      illum quasi voluptas nam minus atque! Minus nemo quia quasi tenetur
      nesciunt cumque, voluptas earum architecto, aliquid harum molestiae.
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
