<template>
  <section class="summary">
    <h3>Summering</h3>
    <article v-for="(product,index) in products" :key="index" class="product">
      <img :src="require(`../assets/img/${product.images[0]}`)" alt />
      <p>Antal: {{product.qty}}</p>
      <p>Namn: {{product.name}}</p>
      <p>Storlek: {{product.sizes}}</p>
      <p>Pris: {{product.price}}</p>
      <p></p>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: (state) => state.shoppingCart,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.summary {
  padding: 1rem;
  background: $white;
}

img {
  height: 80px;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 10px 0px;
}

p {
  font-size: 0.7rem;
}
</style>>

