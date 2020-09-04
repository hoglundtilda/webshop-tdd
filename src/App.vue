<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :products="products" />
    </transition>
  </div>
</template>

<script>
import products from "@/assets/products.json";
export default {
  computed: {
    products() {
      return products.products;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;500;700&display=swap");
@import "./assets/scss/variables";

#app {
  font-family: $font;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
