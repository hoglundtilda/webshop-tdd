<template>
  <div class="wrapper">
    <section class="filters">
      <select id="group_size" class="size" v-model="size">
        <option hidden selected value="Size">Size</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
      </select>
      <select id="group_price" class="price" v-model="price">
        <option hidden selected value="Price">Price</option>
        <option value="700-899">700-899</option>
        <option value="900-1099">900-1099</option>
        <option value="1100-1299">1100-1299</option>
        <option value="1300-1499">1300-1499</option>
        <option value="1500-10000">1500+</option>
      </select>
      <div class="searchfieled">
        <input type="text" class="input" v-model="input" />
        <i class="fas fa-search"></i>
      </div>
      <button class="filter_button" @click="setFilter">Filtrera</button>
    </section>
  </div>
</template>

<script>
import jsonProducts from "@/assets/products.json";
export default {
  data: () => {
    return {
      size: "Size",
      price: "Price",
      input: "",
      minPrice: "",
      maxPrice: "",
      hasSizeFilter: false,
      hasInputFilter: false,
      hasPriceFilter: false,
      hasFilter: false,
      products: jsonProducts.products,
      filteredProducts: [],
    };
  },
  methods: {
    filterBySize() {
      if (this.hasSizeFilter === false) {
        this.hasFilter = false;
        this.filteredProducts = this.products;
      } else {
        this.hasFilter = true;
        this.filteredProducts = this.products.filter((product) => {
          for (let i = 0; i < product.sizes.length; i++) {
            let stock = parseInt(product.sizes[i].stock);
            if (product.sizes[i].size === this.size && stock > 0) {
              return product;
            }
          }
        });
      }
      this.filterByPrice();
    },
    filterByPrice() {
      if (this.hasPriceFilter === false && this.hasFilter === false) {
        this.hasFilter = false;
        this.products = jsonProducts.products;
      } else if (this.hasPriceFilter === true) {
        this.hasFilter = true;
        this.filteredProducts = this.filteredProducts.filter((product) => {
          if (
            parseInt(product.price) >= parseInt(this.minPrice) &&
            parseInt(product.price) <= parseInt(this.maxPrice)
          ) {
            return product;
          }
        });
      }
      this.filterByInput();
    },
    filterByInput() {
      if (this.hasInputFilter === false && this.hasFilter === false) {
        this.hasFilter = false;
        this.products = jsonProducts.products;
      } else if (this.hasInputFilter === true) {
        this.hasFilter = true;
        this.filteredProducts = this.filteredProducts.filter((product) => {
          const str = product.brand.toLowerCase();
          return str.includes(this.input);
        });
      }
      this.$emit("hasFilter", this.hasFilter);
      this.$emit("filteredProducts", this.filteredProducts);
    },
    setFilter() {
      // PRICE
      if (this.price === "Price") {
        this.hasPriceFilter = false;
      } else {
        this.hasPriceFilter = true;
        const splitPrice = this.price.split("-");
        this.minPrice = splitPrice[0];
        this.maxPrice = splitPrice[1];
      }
      // SIZE
      if (this.size === "Size") {
        this.hasSizeFilter = false;
      } else {
        this.hasSizeFilter = true;
      }

      // INPUT
      if (this.input === "") {
        this.hasInputFilter = false;
      } else {
        this.hasInputFilter = true;
      }
      //Starta action i store
      this.filterBySize();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
body {
  font-family: $font;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(230, 228, 228);
  height: 4em;

  .filters {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;

    .size,
    .price {
      width: 6rem;
      height: 26px;
      margin: 0 0.5rem;
      color: $dark;
      font-weight: 700;
      font-family: $font;
    }

    .searchfieled {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 2em;
    }
    .input {
      outline: none;
      border: none;
      border-bottom: 1px solid $dark;
      width: 20em;
      padding-top: 0.7em;
      font-size: 0.8em;
      font-family: $font;
    }

    .fa-search {
      position: absolute;
      padding-left: -1em;
      font-size: 1.2em;
      color: $dark;
      right: 0;
    }

    button {
      background: none;
      border: 0.75px solid $dark;
      border-radius: 2px;
      color: $dark;
      height: 26px;
      padding: 0 0.5em;
      margin: 0 1em;
      text-align: center;
      font-weight: 700;
      font-size: 0.9em;
    }
  }
}
</style>
