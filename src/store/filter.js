import jsonProducts from '@/assets/products.json';
const setFilter = {
  state: {
    minPrice: '',
    maxPrice: '',
    noPriceFilter: '',
    size: '',
    products: jsonProducts.products,
    filteredProducts: [],
    hasFilter: false,
  },
  mutations: {
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
  },
  actions: {
    filterPrice(ctx) {
      ctx.commit('price');
    },
  },
  modules: {},
};

export default setFilter;
