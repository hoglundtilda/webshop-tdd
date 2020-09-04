import { shallowMount, createLocalVue } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';
import CartButton from '@/components/CartButton.vue';
import Vuex from 'vuex';

const localVue = createLocalVue().use(Vuex);

const store = new Vuex.Store({
  state: {
    cartItems: 1,
  },
});

it('should display Cart component when rendered', () => {
  const wrapper = shallowMount(Nav),
    cart = wrapper.findComponent(CartButton);

  expect(cart.exists()).toBe(true);
});

it('should display the value from store in CartButton component', () => {
  const wrapper = shallowMount(CartButton, {
    store,
    localVue,
  });

  expect(wrapper.find('span').text()).toBe('1');
});
