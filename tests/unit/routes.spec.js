import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App.vue';
import routes from '@/router/routes.js';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import OrderComplete from '@/views/OrderComplete.vue';

// TESTA ATT RÄTT VIEWS RENDERAS FÖR ROUTER LINKS

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe('App.vue', () => {
  let store;
  let router;
  beforeEach(() => {
    router = new VueRouter({ routes });
    store = new Vuex.Store({
      state: { shoppingCart: ['1', '2', '3'] },
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
  // Renders ShoeInfo view via routing
  // Testas i ShoeInfo när den mountas

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

// SKRIV test för OrderComplete route
