<template>
  <div @click="toCart" class="cart_button">
    <i class="fas fa-shopping-cart fa-2x" @click="toCart"></i>
    <span>{{shoppingCart}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      shoppingCart: (state) => state.shoppingCart.length,
    }),
  },
  methods: {
    toCart() {
      const path = `/cart`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
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
    margin-bottom: 1em;
    padding-bottom: 0.1em;
    margin-right: 0.5em;
    font-family: $font;
    font-size: 1.1em;
    color: $dark;
    margin-left: 2em;
    display: flex;
    text-align: center;
    justify-items: center;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
  }
}

@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}

.cart_button:hover {
  animation-name: pop;
  transform: perspective(1px) translateZ(0);
  animation-iteration-count: 1;
  animation-duration: 0.3s;
}
</style>