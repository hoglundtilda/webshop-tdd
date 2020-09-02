
import { mount, createLocalVue } from '@vue/test-utils';

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App.vue';
import routes from '@/router/routes.js';
import ShoeInfo from '@/views/ShoeInfo.vue';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import CartButton from '@/components/CartButton.vue';

// TESTA ATT RÄTT VIEWS RENDERAS FÖR ROUTER LINKS

// https://lmiller1990.github.io/vue-testing-handbook/vue-router.html#creating-the-router-and-routes
// sätt upp localVue och installera route i test istället för att använda vues

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe('App.vue', () => {
  let store;
  let router;
  beforeEach(() => {
    router = new VueRouter({ routes });
    store = new Vuex.Store({
      state: { cartItems: 1 },
    });
  });

  // HOME

  it('Renders Home view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });
    router.push('/');

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });


  // SHOEINFO
  it('Renders ShoeInfo view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push('/shoeinfo/:shoe');

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ShoeInfo).exists()).toBe(true);
  });


  // CART
  it('Renders Cart view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push('/cart');

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Cart).exists()).toBe(true);
  });
});
