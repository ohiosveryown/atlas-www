<template>
  <footer>
    <ul class="content">
      <li>© Atlas Support. All Rights Reserved.</li>
      <li>
        <a
          target="_blank"
          href="https://app.termly.io/document/terms-of-use-for-website/cb40dc8b-1787-4cc8-9bdf-48d655256507"
          >Terms of Service</a
        >
      </li>

      <li>
        <a
          target="_blank"
          href="https://app.termly.io/document/privacy-policy/b0992b66-3405-441c-b330-d79d2c6de541"
          >Privacy Policy</a
        >
      </li>
    </ul>
    <img
      src="https://res.cloudinary.com/pence-atlas/image/upload/v1657035564/arxk14u4gdnab21ws1rw_ia7u0r.png"
      alt="mesh gradient"
      class="bg"
    />
  </footer>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  footer {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: linear-gradient(180deg, #200a4a 0%, #11022e 100%);
    @include breakpoint(md) {
      /*       height: 32rem; */
    }
  }

  .content {
    text-align: center;
    position: relative;
    z-index: var(--z2);
    padding: 2.4rem 1.2rem;
    @include breakpoint(md) {
      text-align: left;
      display: flex;
      justify-content: space-between;
      padding: 5.6rem 5.6rem;
    }
  }

  li:first-of-type {
    flex: 1;
    opacity: 0.64;
    margin-bottom: 1.2rem;
    @include breakpoint(md) {
      margin-bottom: 0;
    }
  }

  li:last-of-type {
    margin-top: 1.2rem;
    @include breakpoint(md) {
      margin-top: 0;
      margin-left: 4vw;
    }
  }

  a {
    text-decoration: underline;
  }

  @media (pointer: fine) {
    a:hover {
      text-decoration: none;
    }
  }

  .bg {
    position: absolute;
    z-index: var(--z1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<script>
  export default {}
</script>
