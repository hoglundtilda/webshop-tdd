<template>
  <div class="wrapper">
    <section class="dropdown">
      <select name id="group_size" class="size" v-model="size">
        <option value="Size">Size</option>
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
      <select name id="group_price" class="price" v-model="price">
        <option value="Price">Price</option>
        <option value="300-499">300-499</option>
        <option value="500-699">500-699</option>
        <option value="700-899">700-899</option>
        <option value="900-1099">900-1099</option>
        <option value="1100-1299">1100-1299</option>
        <option value="1300-1499">1300-1499</option>
        <option value="1500-10000">1500+</option>
      </select>
    </section>
    <div class="searchfieled">
      <input type="text" class="input" v-model="input" />
      <i class="fas fa-search"></i>
    </div>
    <button class="filter_button" @click="setFilter">Filtrera</button>
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
      } else {
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
      } else {
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
  justify-content: space-around;
  border-bottom: 2px solid rgb(230, 228, 228);
  height: 3em;
  margin: 1rem 0rem;
}

.size {
  margin: 0 1rem;
}
.size,
.price {
  width: 6rem;
}
.searchfieled {
  position: relative;
}
.input {
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
}
.fa-search {
  position: absolute;
  right: 0.1rem;
  bottom: 1.7rem;
}
</style>
