import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import NewsSection from '@/components/NewsSection.vue';
import Products from '@/components/Products.vue';
import Footer from '@/components/Footer.vue';

// Tester för Home view
// Visas alla komponenter som ska visas i Home view?

it('Should display all components at render Home view', () => {
  const wrapper = mount(Home),
    header = wrapper.findComponent(Header),
    newsSection = wrapper.findComponent(NewsSection),
    products = wrapper.findComponent(Products),
    footer = wrapper.findComponent(Footer);

  expect(header.exists()).toBe(true);
  expect(newsSection.exists()).toBe(true);
  expect(products.exists()).toBe(true);
  expect(footer.exists()).toBe(true);
});
