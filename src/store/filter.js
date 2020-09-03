import jsonProducts from '@/assets/products.json';

const state = {
  minPrice: '',
  maxPrice: '',
  noPriceFilter: '',
  size: '',
  products: jsonProducts.products,
  filteredProducts: [],
  hasFilter: false,
};
const mutations = {
  price(state) {
    if (
      state.minPrice === '' ||
      state.maxPrice === '' ||
      state.noPriceFilter === 'Price'
    ) {
      state.hasFilter = false;
      state.products = jsonProducts.products;
    } else {
      state.hasFilter = true;
      state.filteredProducts = jsonProducts.products.filter((product) => {
        if (
          parseInt(product.price) >= state.minPrice &&
          parseInt(product.price) <= state.maxPrice
        ) {
          return product;
        }
      });
    }
  },
};
const actions = {
  filterPrice(ctx) {
    ctx.commit('price');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
