<template>
  <div class="nav">
    <ul>
      <p>Om</p>
      <p>Nyhter</p>
      <p>Kollektion</p>
      <p>Rea</p>
    </ul>

    <CartButton class="cart_button" />
  </div>
</template>

<script>
import CartButton from "./CartButton";
export default {
  components: { CartButton },
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
      margin: 1.5em;
      color: $white;
      font-weight: 100;
    }
  }

  .cart_button {
    margin: 1em;
    color: white;
  }
}
</style>