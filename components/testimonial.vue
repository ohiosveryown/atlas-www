<template>
  <li>
    <header>
      <img :src="avatar" alt="" />
      <article>
        <span class="inter author">{{ author }}</span>
        <span class="title">{{ title }}</span>
      </article>
    </header>
    <blockquote>"{{ quote }}"</blockquote>
  </li>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  img {
    margin-right: 1.2rem;
    border-radius: 100px;
    width: 4.8rem;
    height: 4.8rem;
  }

  article {
    display: flex;
    flex-direction: column;
  }

  .title {
    opacity: 0.72;
  }

  blockquote {
    padding: 2.4rem;
    margin-bottom: 4.2rem;
    border-radius: 20px;
    background: linear-gradient(100deg, #811313 0%, #081869 100%);
    box-shadow: 0px 60px 80px rgba(0, 0, 0, 0.38),
      0px 23px 25px rgba(0, 0, 0, 0.24), 0px 4px 6px rgba(0, 0, 0, 0.14);
    @include breakpoint(md) {
      max-width: 48ch;
      width: max-content;
    }

    @include breakpoint(md) {
      border-radius: 100px;
    }
  }
</style>

<script>
  export default {
    props: ["avatar", "author", "title", "quote"],
  }
</script>
