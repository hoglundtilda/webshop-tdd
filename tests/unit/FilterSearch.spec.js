import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Filter from '@/components/FilterSearch.vue';
import Products from '@/components/Products.vue';
import jsonProducts from '@/assets/products.json';
import setFilter from '@/store/filter.js';
import Vuex from 'vuex';

const localVue = createLocalVue().use(Vuex);

describe('FilterSearch.vue', () => {
  /* it('calls store action filterPrice when selecting a price option', async () => {
    const filterWrapper = mount(Filter, {
      store,
      localVue,
    });
    const wrapper = filterWrapper.find('.price').findAll('option');
    await wrapper.at(2).trigger('change');
    //const option = filterWrapper.findAll('.product');
    //option.at(2).trigger('change');
    expect(actions.filterPrice).toHaveBeenCalled();
  }); */
  /* it('Should return an array with shoes matching price condition', async () => {
    const priceFilter = filterWrapper.find('#group_price').findAll('option'),
      minPrice = 700,
      maxPrice = 899,
      filteredProducts = jsonProducts.products.filter((product) => {
        if (
          parseInt(product.price) >= minPrice &&
          parseInt(product.price) <= maxPrice
        ) {
          return product;
        }
      }),
      expected = filteredProducts.length;

    await priceFilter.at(3).trigger('change');

    const productWrapper = shallowMount(Products, {
      store,
      localVue,
    });
    const products = productWrapper.findAll('.product');
    const actual = products.length;

    expect(actual).toBe(expected);
  }); */
  /* it('should return all items with a certain size in stock', () => {
    const size = wrapper.find('.size');
  }); */
});
