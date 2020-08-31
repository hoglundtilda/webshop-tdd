import { shallowMount } from '@vue/test-utils';
import productsJSON from '@/assets/products.json';
import Products from '@/components/Products.vue';
import Filter from '@/components/Filter.vue';

// Tester för products component
//1. Skall rendera ut antal produkter som finns i jsonfil eller backend
//2. Testa att när du klickar på en sko skall den öppna detaljerad sida för den skon

describe('Products.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Products);
  });

  // Visas filter/search komponenten när products renderas?
  it('Should display search/filter component when rendered', () => {
    const filter = wrapper.findComponent(Filter);

    expect(filter.exists()).toBe(true);
  });

  // Visas alla produkter som finns i json när products renderas?
  it('Should display all products from json when rendered', () => {
    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length,
      expected = productsJSON.products.length;
    //console.log(productsJSON.products.length);

    expect(actual).toBe(expected);
  });
});
