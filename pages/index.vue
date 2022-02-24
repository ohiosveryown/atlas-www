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
        <card-wide
          icon01="https://res.cloudinary.com/da32ufmnf/image/upload/v1645730789/atlas/ek9smi1lxr2tluyz7uvx.png"
          icon02="https://res.cloudinary.com/da32ufmnf/image/upload/v1645730789/atlas/ek9smi1lxr2tluyz7uvx.png"
          icon03="https://res.cloudinary.com/da32ufmnf/image/upload/v1645730789/atlas/ek9smi1lxr2tluyz7uvx.png"
          mesh="https://res.cloudinary.com/da32ufmnf/image/upload/v1645727807/atlas/e9hdo4knpnhca8kddcyg.png"
          product="https://res.cloudinary.com/da32ufmnf/image/upload/v1645729570/atlas/oed09rxp6ev0etchgp1q.png"
        />
      </section>

      <section class="cards">
        <card
          class="card--sm card--padding"
          icon="https://res.cloudinary.com/da32ufmnf/image/upload/v1645730789/atlas/ek9smi1lxr2tluyz7uvx.png"
          heading="Respond faster"
          subheading="Supercharge your daily routine with batch actions, shortcuts, and automations."
          product="https://res.cloudinary.com/da32ufmnf/image/upload/v1645745514/atlas/ofkx9jbjnsajs79r8bcl.png"
          bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645743334/atlas/ncpqxsglovghqmj37iyg.png"
        />

        <card
          class="card--md"
          icon="https://res.cloudinary.com/da32ufmnf/image/upload/v1645730789/atlas/ek9smi1lxr2tluyz7uvx.png"
          heading="Smarter insights"
          subheading="Convert your customer conversations into data driven insights to drive your product and engineering roadmaps."
          product="https://res.cloudinary.com/da32ufmnf/image/upload/v1645742402/atlas/gr8lf3spcuhj7mbe0j5l.png"
          bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645742612/atlas/hgaeayz5pmhbkkkncyv6.png"
        />
      </section>

      <p class="mt-9">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iure amet
        illum quasi voluptas nam minus atque! Minus nemo quia quasi tenetur
        nesciunt cumque, voluptas earum architecto, aliquid harum molestiae.
      </p>
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

  .cards {
    @include breakpoint(md) {
      display: flex;
      justify-content: space-between;
    }
  }

  .card--sm {
    @include breakpoint(md) {
      width: grid-width(5);
    }
  }

  .card--md {
    @include breakpoint(md) {
      width: grid-width(6.5);
    }
  }
</style>

<script>
  export default {}
</script>
