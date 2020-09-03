<template>
  <div @click="toCart" class="cart_button">
    <i class="fas fa-shopping-cart fa-2x" @click="toCart"></i>
    <span>{{cartItems}}</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    cartItems() {
      return this.$store.state.shoppingCart.length;
    },
  },
  methods: {
    toCart() {
      this.$router.push("/cart/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.cart_button {
  cursor: pointer;
  height: 50px;
  width: 50px;
  padding: 8px;

  justify-content: center;
  display: flex;

  img {
    width: 100%;
  }

  span {
    position: absolute;
    z-index: 1;
    background: $color;
    border-radius: 100%;
    width: 1.2em;
    height: 1.2em;
    font-family: $font;

    margin-left: 2em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
  }
}
</style>