<template>
  <div id="app">
    <router-view :products="products" />
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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100&display=swap");
@import "./assets/scss/variables";

#app {
  font-family: $font;
}
</style>
