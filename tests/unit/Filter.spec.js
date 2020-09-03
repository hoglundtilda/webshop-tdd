import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import Products from '@/components/Products.vue';
import FilterSearch from '@/components/FilterSearch.vue';
import jsonProducts from '@/assets/products.json';
import store from '@/store/index.js';
import setFilter from '@/store/filter.js';

const localVue = createLocalVue().use(Vuex);
Vue.use(Vuex);

test('check if products components read products from store state when no filter is on', () => {
  let store;
  let wrapper;

  let setFilter = {
    state: {
      hasFilter: false,
      products: jsonProducts.products,
    },
  };

  store = new Vuex.Store({
    modules: {
      setFilter,
    },
  });

  wrapper = shallowMount(Products, {
    store: store,
  });

  const products = wrapper.findAll('li');
  const actual = products.length;
  const expected = jsonProducts.products.length;
  expect(actual).toBe(expected);
});

it('store action should have been called', async () => {
  let store;
  let wrapper;
  let state;
  let actions;
  let mutations;

  state = {
    hasFilter: false,
    products: jsonProducts.products,
    minPrice: '',
    maxPrice: '',
  };
  actions = {
    filterPrice: jest.fn(),
  };

  mutations = {
    price: jest.fn(),
  };

  store = new Vuex.Store({
    modules: {
      setFilter: {
        state: setFilter.state,
        actions: setFilter.actions,
        mutations: setFilter.mutations,
      },
    },
  });

  wrapper = shallowMount(FilterSearch, {
    store,
    localVue,
  });

  const filter = wrapper.find('.price').findAll('option');
  console.log(filter.at(2).text());
  await filter.at(3).trigger('change');

  expect(actions.filterPrice).toHaveBeenCalled();

  // Har följt https://vue-test-utils.vuejs.org/guides/using-with-vuex.html men får inte testet att funka.
});
