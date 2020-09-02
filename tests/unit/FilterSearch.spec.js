import { shallowMount } from '@vue/test-utils';
import Filter from '@/components/FilterSearch.vue';
import Products from '@/components/Products.vue';
import jsonProducts from '@/assets/products.json';
describe('FilterSearch.vue', () => {
  let filterWrapper;
  let productWrapper;
  beforeEach(() => {
    filterWrapper = shallowMount(Filter);
    productWrapper = shallowMount(Products);
  });

  /* it('should return all items with a certain size in stock', () => {
    const size = wrapper.find('.size');
  }); */

  it('Should return an array with shoes matching price condition', async () => {
    const priceFilter = filterWrapper.find('#group_price').findAll('option'),
      products = productWrapper.findAll('.product'),
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

    await priceFilter.trigger('change');
    const actual = products.length;

    expect(actual).toBe(expected);
  });
});
