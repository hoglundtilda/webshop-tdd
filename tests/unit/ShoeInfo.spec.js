import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import CartButton from '@/components/CartButton.vue';
import Products from '@/components/Products.vue';
import ShoeInfo from '@/views/ShoeInfo.vue';
import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes.js';
import App from '@/App.vue';
import jsonProducts from '@/assets/products.json';

// Vi har inte kunnat skriva ett grönt test för att testa att man kan lägga till en produkt.
// Det har varit svårt att förstå logiken med store och router eftersom vi inte gått igenom det.
// Därför vet vi inte best-practice hur man ska genomföra dessa tester.
// ShoeInfo view är beroende av props och params.
// Vi har försökt att sätta upp dessa men property: shoe blir ändå undefined i testet

//1. När användaren klickar på lägg till i varukorgen och storleken finns ska dispatch till store köras

/* test('should update store-state shoppingCart when user add a shoe from ShoeInfo', async () => {
  const cartButtonWrapper = shallowMount(CartButton),
    
  let numberOfCartItems = cartButtonWrapper.find('span');
  numberOfCartItems = parseInt(numberOfCartItems.text());

  expect(numberOfCartItems).toBe(1);
}); */

/* test('check so that action is called correctly on when user toggle addToCart, async () => {
  Vue.use(Vuex);
  const actions = {
    addToCart: jest.fn(),
  };

  const store = new Vuex.Store({ actions });

  const $route = {
    path: '/shoeinfo/0003',
  };

  const wrapper = shallowMount(ShoeInfo, {
    mocks: {
      $route,
    },
    propsData: {
      products: jsonProducts.products,
    },
    store,
  });

  wrapper.vm.$route.path; 

   const addButton = wrapper.find('.addToCart'),
    selectSize = wrapper.findAll('.options');

  await selectSize.at(1).setSelected();
  await addButton.trigger('click'); 

  expect(actions.addToCart).toHaveBeenCalled();
}); */
