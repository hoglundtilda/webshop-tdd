import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import Nav from '@/components/Header.vue';

it('should display all components when rendered', () => {
  const wrapper = shallowMount(Header);
  const nav = wrapper.findComponent(Nav);

  expect(nav.exists()).toBe(true);
});
