import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import CartButton from '@/components/CartButton.vue';

it('should display Nav component when rendered', () => {
  const wrapper = shallowMount(Header),
    nav = wrapper.findComponent(Nav);

  expect(nav.exists()).toBe(true);
});

it('should display Cart component when rendered', () => {
  const wrapper = shallowMount(Nav),
    cart = wrapper.findComponent(CartButton);

  expect(cart.exists()).toBe(true);
});
