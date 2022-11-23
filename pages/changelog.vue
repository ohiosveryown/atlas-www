<template>
  <div ref="index" class="app width">
    <header-md
      class="enter tac page-header"
      heading="Changelog"
      subheading="We’re always shipping updates to Atlas. Check out our changelog below or subscribe for future updates."
    />

    <main class="enter width">
      <section>
        <aside>
          <header>Chatbots</header>
          <p>11 November 2022</p>
        </aside>
        <article>
          <figure class="hero">
            <img
              src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669216462/atlas-refresh/index/dnyq7minvldqfohodtzg.png"
              alt=""
            />
          </figure>

          <header class="inter">Welcome to Automationsville</header>
          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
            📝 Editor: create a chatbot from the chatbot editor in App Config >
            Chatbots. 🎬 Actions: can be taken by the chat widget to respond to
            customers (Messaging), open new tickets (Ticket), or to give
            suggestions for articles to read (Help Center).
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
            📝 Editor: create a chatbot from the chatbot editor in App Config >
            Chatbots. 🎬 Actions: can be taken by the chat widget to respond to
            customers (Messaging), open new tickets (Ticket), or to give
            suggestions for articles to read (Help Center).
          </p>
        </article>
      </section>
      <section>
        <aside>
          <header>Multi-channel</header>
          <p>2 November 2022</p>
        </aside>
        <article>
          <figure class="hero hero-crop">
            <img
              src="https://res.cloudinary.com/da32ufmnf/image/upload/v1669133198/atlas-refresh/features/vunfgnwlg4n9bjiclvga.png"
              alt=""
            />
          </figure>

          <header class="inter">Welcome to Automationsville</header>
          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
            📝 Editor: create a chatbot from the chatbot editor in App Config >
            Chatbots. 🎬 Actions: can be taken by the chat widget to respond to
            customers (Messaging), open new tickets (Ticket), or to give
            suggestions for articles to read (Help Center).
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
          </p>

          <p>
            Responding to your customers quickly with a small team can be
            incredibly difficult. To triage common customer questions and
            pre-qualify your customer conversations, we’re releasing Chatbots.
            📝 Editor: create a chatbot from the chatbot editor in App Config >
            Chatbots. 🎬 Actions: can be taken by the chat widget to respond to
            customers (Messaging), open new tickets (Ticket), or to give
            suggestions for articles to read (Help Center).
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .page-header {
    @include breakpoint(md) {
      margin: 6.4rem auto;
      width: grid-width(6);
    }
  }

  main {
    position: relative;
    margin: 9.6rem 0;

    @include breakpoint(md) {
      border-left: 1px solid #591bdd;
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    @include breakpoint(md) {
      flex-direction: row;
      margin-bottom: 6.4rem;
    }
  }

  aside {
    align-self: flex-start;
    position: sticky;
    top: 0;

    header {
      margin-bottom: 0.4rem;
      font-size: 1.6rem;
      font-weight: 600;
    }

    p {
      font-size: 1.4rem;
      color: #c7c3cd;
    }

    @include breakpoint(md) {
      padding-left: 2rem;
    }
  }

  article {
    border-bottom: 1px solid #424242;
    @include breakpoint(md) {
      padding-bottom: 6.4rem;
      width: grid-width(8);
    }

    header {
      margin-bottom: 1.2rem;
      font-size: 2.2rem;
    }

    p {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.88);
      margin-bottom: 1.2rem;
    }
  }

  .hero {
    * {
      border-radius: 8px;
    }
    position: relative;
    margin-bottom: 5.6rem;
    border-radius: 12px;
    padding: 3.2rem;
    overflow: hidden;
    background: linear-gradient(
      252deg,
      rgba(19, 15, 35, 0.88) 0%,
      rgba(69, 58, 104, 0.88) 47.19%,
      rgba(38, 32, 52, 0.88) 98%
    );

    @include breakpoint(mdl) {
      padding: 5.2rem;
    }

    @include breakpoint(lg) {
      padding: 6.4rem;
    }
  }

  .hero-crop {
    max-height: 26rem;

    @include breakpoint(md) {
      padding: 3.2rem;
      max-height: 32rem;
    }

    @include breakpoint(lg) {
      max-height: 44rem;
    }
  }
</style>

<script>
  export default {
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
