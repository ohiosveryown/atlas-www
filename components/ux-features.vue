<template>
  <ul>
    <li class="card-wrapper">
      <card
        class="card"
        icon="⌨️"
        heading="Ticket History"
        subheading="Know your customers most pressing and time sensitive issues."
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />
    </li>

    <li class="card-wrapper">
      <card
        class="card"
        icon="🧰"
        heading="Command menu"
        subheading="Know your customers most pressing and time sensitive issues."
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />
    </li>

    <li class="card-wrapper">
      <card
        class="card"
        icon="🔎️"
        heading="Search"
        subheading="Know your customers most pressing and time sensitive issues."
        bg="https://res.cloudinary.com/da32ufmnf/image/upload/v1645805170/atlas/f8kyzjyzmdpcftqd0bmc.png"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  ul {
    display: flex;

    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .card-wrapper {
    perspective: 1000px;
    transform-style: preserve-3d;

    @include breakpoint(md) {
      padding: 2rem;
      width: grid-width(3.8);
    }
  }

  .card {
    transition: transform 0.1s;
  }
</style>

<script>
  export default {
    //     mounted() {
    //       const cards = document.querySelectorAll(".card-wrapper")
    //       for (let i = 0; i < cards.length; i++) {
    //         const card = cards[i]
    //         card.addEventListener("mousemove", rotate)
    //         card.addEventListener("mouseout", stopRotate)
    //       }
    //
    //       function rotate(e) {
    //         const cardItem = this.querySelector(".card")
    //         const halfHeight = cardItem.offsetHeight / 2
    //
    //         cardItem.style.transform =
    //           "rotateX(" +
    //           -(e.offsetY - halfHeight) / 17 +
    //           "deg) rotateY(" +
    //           (e.offsetX - halfHeight) / 17 +
    //           "deg)"
    //       }
    //       function stopRotate() {
    //         const cardItem = this.querySelector(".card")
    //         cardItem.style.transform = "rotate(0)"
    //       }
    //     },
  }
</script>
