import jsonProducts from '@/assets/products.json';

const state = {
  minPrice: '',
  maxPrice: '',
  size: '',
  input: '',
  hasSizeFilter: false,
  hasInputFilter: false,
  hasPriceFilter: false,
  hasFilter: false,
  products: jsonProducts.products,
  filteredProducts: [],
};
const mutations = {
  // size without pricefilter
  filterBySize(state) {
    if (state.hasSizeFilter === false) {
      state.hasFilter = false;
      state.products = jsonProducts.products;
      state.filteredProducts = jsonProducts.products;
      console.log('1');
    } else {
      console.log('2');
      state.hasFilter = true;
      state.filteredProducts = jsonProducts.products.filter((product) => {
        for (let i = 0; i < product.sizes.length; i++) {
          let stock = parseInt(product.sizes[i].stock);
          if (product.sizes[i].size === state.size && stock > 0) {
            return product;
          }
        }
      });
    }
    this.commit('setFilter/filterByPrice');
  },
  filterByPrice(state) {
    if (state.hasPriceFilter === false && state.hasFilter === false) {
      state.hasFilter = false;
      state.products = jsonProducts.products;
    } else {
      state.hasFilter = true;
      state.filteredProducts = state.filteredProducts.filter((product) => {
        if (
          parseInt(product.price) >= parseInt(state.minPrice) &&
          parseInt(product.price) <= parseInt(state.maxPrice)
        ) {
          return product;
        }
      });
    }
    this.commit('setFilter/filterByInput');
  },
  filterByInput(state) {
    if (state.hasInputFilter === false && state.hasFilter === false) {
      state.hasFilter = false;
      state.products = jsonProducts.products;
    } else {
      state.hasFilter = true;
      state.filteredProducts = state.filteredProducts.filter((product) => {
        const str = product.brand.toLowerCase();
        return str.includes(state.input);
      });
    }
  },
};
const actions = {
  filterProducts(ctx) {
    ctx.commit('filterBySize');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
