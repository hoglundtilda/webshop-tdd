import { shallowMount, createLocalVue } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';
import CartButton from '@/components/CartButton.vue';
import Vuex from 'vuex';
import Vue from 'vue';
//1. CartButton ska visas vid render
//2. CartButton ska visa antalet produkter i varukorgen i ett span element som är kopplad till store

it('should display Cart component when rendered', () => {
  const wrapper = shallowMount(Nav),
    cart = wrapper.findComponent(CartButton);

  expect(cart.exists()).toBe(true);
});

it('should display correct amount of products from store.state', async () => {
  const localVue = createLocalVue().use(Vuex);
  Vue.use(Vuex);
  const state = { shoppingCart: ['1', '2', '3'] };
  const store = new Vuex.Store({
      state,
    }),
    wrapper = shallowMount(CartButton, {
      store,
      localVue,
    }),
    expected = state.shoppingCart.length;

  let numberOfCartItems = wrapper.find('span');
  numberOfCartItems = parseInt(numberOfCartItems.text());

  expect(numberOfCartItems).toBe(expected);
});
