import Vue from 'vue';
import Vuex from 'vuex';
import setFilter from '@/store/filter.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ShoppingCart: [],
    cartItems: 2,
  },
  mutations: {},
  actions: {},
  modules: { setFilter },
});
