import { mount } from '@vue/test-utils';
import FilterSearch from '@/components/FilterSearch.vue';
import Products from '@/components/Products.vue';
import jsonProducts from '@/assets/products.json';

// Tester rörande filtrerings komponenten
//1. Inputfält och select-options ska ha särskilt värde vid rendering
//2. När användaren filtrerar efter input ska skorna filtreras efter märke
//3. När användaren väljer en storlek i options ska bara skor med den storleken i lager visas
//4. När användaren väljer ett prisintervall i options ska skor som matchar priset visas
//5. När användaren väljer flera filter ska skor som matchar dessa visas
//6. När användaren har filtrerat och sedan trycker på reset ska alla produkter visas igen utan filter

describe('FilterSearch.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Products);
  });

  it('should have certain values when rendered', () => {
    const filter = wrapper.findComponent(FilterSearch);

    let inputField = filter.find('.input').element.value,
      sizeSelect = filter.find('.size').findAll('option'),
      priceSelect = filter.find('.price').findAll('option');

    sizeSelect = sizeSelect.at(0).attributes('value');
    priceSelect = priceSelect.at(0).attributes('value');

    expect(inputField).toStrictEqual('');
    expect(sizeSelect).toBe('Size');
    expect(priceSelect).toBe('Price');
  });

  // INPUT FILTER
  it('Should only display products of a certain brand when user enters a brand in input', async () => {
    const filter = wrapper.findComponent(FilterSearch),
      input = filter.find('.input'),
      filterBtn = filter.find('.filter'),
      products = jsonProducts.products,
      expected = products.filter((product) => {
        const str = product.brand.toLowerCase();
        return str.includes('dkny');
      });

    await input.setValue('vans');
    await filterBtn.trigger('click');

    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length;

    expect(actual).toBe(expected.length);
  });

  // SIZE FILTER
  it('should display products of a certain size when user selects a size-option', async () => {
    const filter = wrapper.findComponent(FilterSearch),
      sizeSelect = filter.find('.size').findAll('option'),
      filterBtn = filter.find('.filter'),
      products = jsonProducts.products,
      expected = products.filter((product) => {
        for (let i = 0; i < product.sizes.length; i++) {
          let stock = parseInt(product.sizes[i].stock);
          if (product.sizes[i].size === '35' && stock > 0) {
            return product;
          }
        }
      });

    await sizeSelect.at(1).setSelected();
    await filterBtn.trigger('click');
    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length;

    expect(actual).toBe(expected.length);
  });

  // PRICE FILTER
  it('should display products withing a certain price range', async () => {
    const filter = wrapper.findComponent(FilterSearch),
      priceSelect = filter.find('.price').findAll('option'),
      filterBtn = filter.find('.filter'),
      products = jsonProducts.products,
      expected = products.filter((product) => {
        if (parseInt(product.price) >= 700 && parseInt(product.price) <= 899) {
          return product;
        }
      });

    await priceSelect.at(1).setSelected();
    await filterBtn.trigger('click');
    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length;

    expect(actual).toBe(expected.length);
  });

  it('should return items matching all filters when pressing filter button', async () => {
    const filter = wrapper.findComponent(FilterSearch),
      priceSelect = filter.find('.price').findAll('option'),
      sizeSelect = filter.find('.size').findAll('option'),
      input = filter.find('.input'),
      filterBtn = filter.find('.filter'),
      expected = 1;

    // We know there is only one shoe of this kind and since above filters
    // are working we dont need to test similar functions again.
    await input.setValue('vans');
    await priceSelect.at(0).setSelected();
    await sizeSelect.at(0).setSelected();
    await filterBtn.trigger('click');

    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length;

    expect(actual).toBe(expected);
  });

  it('should display all products (again) from json when reset button is toggled', async () => {
    const filter = wrapper.findComponent(FilterSearch),
      priceSelect = filter.find('.price').findAll('option'),
      sizeSelect = filter.find('.size').findAll('option'),
      input = filter.find('.input'),
      filterBtn = filter.find('.filter'),
      resetBtn = filter.find('.reset'),
      expected = jsonProducts.products.length;

    // since previous test is working no need to check if array
    // is updated in this test, we are using the same filters.
    await input.setValue('vans');
    await priceSelect.at(0).setSelected();
    await sizeSelect.at(0).setSelected();
    await filterBtn.trigger('click');
    await resetBtn.trigger('click');

    const productsArray = wrapper.findAll('li'),
      actual = productsArray.length;

    expect(actual).toBe(expected);
  });
});
