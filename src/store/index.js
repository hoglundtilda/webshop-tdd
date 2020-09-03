import Vue from "vue";
import Vuex from "vuex";
import setFilter from "@/store/filter.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: [],
    cartItems: 2,
  },
  mutations: {
    addToCart(state, shoe) {
      state.shoppingCart.push(shoe);
    },
    removeFromCart(state, product) {
      const cartIndex = state.shoppingCart.indexOf(product);
      state.shoppingCart.splice(cartIndex, 1);
    },
    updateQty(state, product) {
      console.log(state);
      let value = product.value;
      let cartItem = product.product;
      cartItem.qty = parseInt(value);
    },
  },
  actions: {
    addToCart(ctx, shoe) {
      ctx.commit("addToCart", shoe);
    },
    removeFromCart(ctx, product) {
      ctx.commit("removeFromCart", product);
    },
    updateQty(ctx, product) {
      ctx.commit("updateQty", product);
    },
  },
  getters: {
    totalPrice(state) {
      let items = state.shoppingCart.map((product) => {
        return product.qty * parseInt(product.price);
      });
      return items.reduce(function(prev, current) {
        return prev + current;
      }, 0);
    },
  },
  modules: { setFilter },
});
