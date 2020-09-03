<template>
  <div class="nav">
    <ul>
      <p @click="goToHome">Home</p>
      <p>Nyhter</p>
      <p>Kollektion</p>
      <p>Om</p>
    </ul>

    <CartButton class="cart_button" />
  </div>
</template>

<script>
import CartButton from "./CartButton";
export default {
  components: { CartButton },
  methods: {
    goToHome() {
      const path = `/`;
      if (this.$route.path !== path) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;

  ul {
    display: flex;

    p {
      margin: 1.2em;
      color: $white;
      font-weight: 100;
      font-size: 0.9em;
      letter-spacing: 5px;
    }
  }

  p:hover {
    color: $color;
    cursor: pointer;
    animation-name: pop;
    transform: perspective(1px) translateZ(0);
    animation-iteration-count: 1;
    animation-duration: 0.3s;
  }

  @keyframes pop {
    50% {
      transform: scale(1.03);
    }
  }

  .cart_button {
    margin: 1em;
    color: white;
  }
}
</style>