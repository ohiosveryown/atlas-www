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
    max-width: 52ch;
    padding: 2.4rem;
    border-radius: 100px;
    /*     font-size: 1.4rem; */
    background: linear-gradient(99.89deg, #811313 0%, #081869 100%);
    box-shadow: 0px 60px 80px rgba(0, 0, 0, 0.38),
      0px 23.1111px 25.4815px rgba(0, 0, 0, 0.230815),
      0px 4.88889px 6.51852px rgba(0, 0, 0, 0.149185);
  }
</style>

<script>
  export default {
    props: ["avatar", "author", "title", "quote"],
  }
</script>
