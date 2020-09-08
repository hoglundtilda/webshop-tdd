import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Actions from '@/store/modules/actions.js';
import Mutations from '@/store/modules/mutations.js';
import ShoeInfo from '@/views/ShoeInfo.vue';
import jsonProducts from '@/assets/products.json';
import Vuex from 'vuex';
import Vue from 'vue';

// Because it was harder than we thought to test vuex this test is written when view/component already is built.
// But we have learned a lot about testing vuex and are happy that we got it green!

const localVue = createLocalVue().use(Vuex);
Vue.use(Vuex);

describe('ShoeInfo.vue', () => {
  // because ShoeInfo relies on params: mock route, with params used in routes.js
  // pass props to get the right shoe through computed properties

  const shoe = 'AD115O0OM-G11';
  const $route = {
    path: `/shoeinfo/${shoe}`,
  };
  let actions = { addToCart: jest.fn() };
  let store = new Vuex.Store({ actions });
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ShoeInfo, {
      mocks: {
        $route: { params: { shoe } },
      },
      propsData: {
        products: jsonProducts.products,
      },
      store,
      localVue,
    });

    // goto "/shoeinfo/artikelnummer"
    wrapper.vm.$route.path;
  });

  it('should display correct shoe when router push to shoeinfo/params', () => {
    const shoe_artikelnummer = wrapper.find('.article_number'),
      actual = shoe_artikelnummer.text(),
      expected = `Artikelnummer: ${shoe}`;

    expect(actual).toBe(expected);
  });

  it('should dispatch addToCart when clicking button', async () => {
    const addButton = wrapper.find('.addToCart'),
      selectSize = wrapper.findAll('.options');

    await selectSize.at(3).setSelected();
    await addButton.trigger('click');

    expect(actions.addToCart).toHaveBeenCalled();
  });

  it('should dispatch addToCart with correct params', async () => {
    const commit = jest.fn(),
      ctx = { commit },
      shoe = { qty: 1, price: 1395, shoe: 'object' };

    await Actions.addToCart(ctx, shoe);
    expect(commit).toHaveBeenCalledWith('addToCart', shoe);
  });

  it('should update cart when adding shoe with addToCart', () => {
    const state = { shoppingCart: [] },
      shoe = { size: '35', price: '2000', shoe: 'vans' };

    Mutations.addToCart(state, shoe);
    expect(state.shoppingCart[0]).toBe(shoe);
  });

  it('should display a message when selected size is out of stock', async () => {
    const selectSize = wrapper.findAll('.options');

    await selectSize.at(4).setSelected();

    const message = wrapper.find('.outOfStockMessage');

    expect(message.exists()).toBe(true);
  });
});
