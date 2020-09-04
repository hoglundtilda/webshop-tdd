import { shallowMount, createLocalVue } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';
import CartButton from '@/components/CartButton.vue';
import Vuex from 'vuex';

//1. CartButton ska visas vid render
//2. CartButton ska visa antalet produkter i varukorgen i ett span element som är kopplad till store

it('should display Cart component when rendered', () => {
  const wrapper = shallowMount(Nav),
    cart = wrapper.findComponent(CartButton);

  expect(cart.exists()).toBe(true);
});

test('check so that action is called correctly on keyup', async () => {
  const localVue = createLocalVue().use(Vuex),
    state = {
      shoppingCart: ['1', '2', '3'],
    },
    store = new Vuex.Store({ state }),
    wrapper = shallowMount(CartButton, {
      store,
      localVue,
    }),
    expected = state.shoppingCart.length;

  let numberOfCartItems = wrapper.find('span');
  numberOfCartItems = parseInt(numberOfCartItems.text());
  console.log(numberOfCartItems);

  expect(numberOfCartItems).toBe(expected);
});
