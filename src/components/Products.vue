<template>
  <div class="wrapper">
    <FilterSearch @filteredProducts="filteredProducts" @hasFilter="hasFilter" />
    <div class="product_wrapper">
      <ul id="products" class="productUl">
        <li
          v-for="(product, index) in renderProducts"
          :key="index"
          @click="showShoe(product.id)"
          class="product"
        >
          <img :src="require(`../assets/img/${product.images[0]}`)" alt class="shoeImg" />

          <div class="info">
            <span class="salePercent">{{ product.percent }}</span>
            <div class="productPrice">
              <p :class="[{ lineThru: product.sale }]">{{ product.price }} kr</p>

              <p v-if="product.sale" class="salePrice">{{ product.sale }} kr</p>
            </div>
            <p class="productBrand">{{ product.brand }}</p>
            <p class="productModel">{{ product.name }}</p>
          </div>
        </li>
      </ul>
    </div>

    <h1 ref="rea" class="headline_rea">Reaprodukter</h1>
    <ul class="productUl">
      <li
        v-for="(sales, index) in sale"
        :key="index"
        class="product_sale"
        @click="showShoe(sales.id)"
      >
        <img :src="require(`../assets/img/${sales.images[0]}`)" alt class="shoeImg" />
        <div class="info">
          <span class="salePercent">{{ sales.percent }}</span>
          <p class="productPrice salePrice">
            {{ sales.sale }}
            <span class="oldPrice">{{ sales.price }} kr</span>
          </p>
          <p class="productBrand">{{ sales.brand }}</p>
          <p class="productModel">{{ sales.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterSearch from "./FilterSearch.vue";
import json from "@/assets/products.json";
export default {
  components: { FilterSearch },
  data: () => {
    return {
      products: json.products,
      filter: false,
    };
  },
  computed: {
    renderProducts() {
      if (this.filter === true) {
        return this.products;
      } else {
        return json.products;
      }
    },
    sale() {
      const sale = this.products.filter((shoe) => shoe.sale);
      return sale;
    },
  },
  methods: {
    showShoe(id) {
      let shoe = this.products.find((product) => product.id === id);
      this.$router
        .push("/shoeinfo/" + shoe.productinfo.Artikelnummer)
        .then(() => window.scrollTo(0, 0));
    },
    hasFilter(filter) {
      this.filter = filter;
    },
    filteredProducts(products) {
      this.products = products;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  .product_wrapper {
    display: grid;
    justify-content: center;
    align-items: center;
  }
}

.productUl {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 5rem;

  justify-content: flex-start;
}

.lineThru {
  text-decoration: line-through;
}

.product,
.product_sale {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 14rem;
  margin: 2rem;
  height: 25rem;
  box-shadow: 3px 10px 17px 1px rgba(136, 136, 136, 0.329);
  border-radius: 2px;
  cursor: pointer;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 0;
}

.productBrand {
  letter-spacing: 2px;
  font-weight: 300;
}
.productPrice {
  font-weight: 900;
}
.salePercent {
  color: $red;
  width: 4rem;

  position: absolute;
  margin-top: -3rem;
  margin-left: 1rem;
  font-size: 1rem;
}

.headline_rea {
  text-align: center;
}

.salePrice {
  color: $red;
}
.oldPrice {
  color: black;
  text-decoration: line-through;
}
</style>
