import Vue from 'vue';
import Vuex from 'vuex';
import setFilter from '@/store/filter.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: [],
    cartItems: 2,
  },
  mutations: {},
  actions: {},
  modules: { setFilter },
});
