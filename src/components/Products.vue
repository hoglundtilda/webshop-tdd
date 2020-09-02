<template>
  <div class="wrapper">
    <FilterSearch />

    <ul class="productUl">
      <li
        v-for="(product, index) in products.products"
        :key="index"
        @click="showShoe(index)"
        class="productList"
      >
        <img
          :src="require(`../assets/img/${product.images[0]}`)"
          alt
          class="shoeImg"
        />
        <p class="productPrice">{{ product.price }} kr</p>

        <p class="productBrand">{{ product.brand }} -</p>
        <p class="productModel">{{ product.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterSearch from "./FilterSearch.vue";
import json from "@/assets/products.json";
export default {
  data: () => {
    return { products: json };
  },
  components: { FilterSearch },
  methods: {
    showShoe(index) {
      let shoe = this.products.products[index];
      console.log(shoe);
      this.$router.push("/shoeinfo/" + shoe.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.productUl {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}

.productList {
  display: flex;
  flex-direction: column;
  width: 14rem;
  margin: 2rem;
  height: 25rem;
  box-shadow: 3px 13px 17px 1px rgba(136, 136, 136, 0.75);
  border-radius: 5px;
}

.shoeImg {
  width: 14rem;
  height: 18rem;
}

.productPrice,
.productBrand,
.productModel {
  padding: 0.2rem 1rem;
  margin: 0;
}
.productPrice {
  font-weight: 900;
}
</style>
