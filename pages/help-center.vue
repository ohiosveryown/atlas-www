<template>
  <div ref="index" class="app-feature width">
    <img
      src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669129127/atlas-refresh/features/i5zz7nglrnrfpss86ae8.png"
      alt=""
      class="enter icon"
    />
    <header-md
      class="enter tac page-header"
      heading="Help Center"
      subheading="The fastest way to create AI chatbots on your
      own terms and without coding."
    />

    <main class="enter width">
      <figure class="hero hero-crop">
        <img
          src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669133198/atlas-refresh/features/vunfgnwlg4n9bjiclvga.png"
          alt=""
        />
      </figure>

      <article>
        <header class="inter">Smarter Insights</header>
        <p>
          In your Help Center Settings you’ll see lots of customization options
          to help you decide exactly how your Help Center should appear for your
          customers.
        </p>
        <p>
          Here’s how to choose a color for your Help Center, add your own logo
          and header image, customize your Help Center domain and more.
        </p>
      </article>

      <article>
        <header class="inter">Even More Smarter Insights</header>
        <p>
          In your Help Center Settings you’ll see lots of customization options
          to help you decide exactly how your Help Center should appear for your
          customers.
        </p>
        <p>
          Here’s how to choose a color for your Help Center, add your own logo
          and header image, customize your Help Center domain and more.
        </p>
      </article>

      <section class="signup">
        <signup
          class=""
          heading="Work smarter. Get started today."
          subheading="Sign up today and make customer interaction easier, and smarter."
        />
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    layout: "feature-detail",

    methods: {
      enter() {
        gsap.from(".enter", {
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          stagger: 0.12,
          skewY: 6,
          y: 80,
          ease: Power4.easeOut,
        })
      },
    },

    mounted() {
      this.enter()
    },

    beforeDestroy() {
      this.$refs.index.style.cssText = `
              opacity: 0;
              transition: opacity 300ms ease;
            `
    },
  }
</script>
