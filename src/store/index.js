import Vue from 'vue';
import Vuex from 'vuex';
import setFilter from '@/store/filter.js';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shoppingCart: [],
        cartItems: 2,
    },
    mutations: {
        addToCart(state, shoe) {
            state.shoppingCart.push(shoe)
        }
    },
    actions: {
        addToCart(ctx, shoe) {
            ctx.commit('addToCart', shoe)
        }
    },
    modules: { setFilter },
});