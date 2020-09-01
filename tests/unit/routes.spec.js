import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import routes from '@/router/routes';
import ShoeInfo from '@/views/ShoeInfo.vue';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';

// TESTA ATT RÄTT VIEWS RENDERAS FÖR ROUTER LINKS

// https://lmiller1990.github.io/vue-testing-handbook/vue-router.html#creating-the-router-and-routes
// sätt upp localVue och installera route i test istället för att använda vues

const localVue = createLocalVue();
localVue.use(VueRouter);

// HOME
it('Renders Home view via routing', async () => {
  const router = new VueRouter({ routes }),
    wrapper = mount(App, {
      localVue,
      router,
    });

  router.push('/'); // Ska vi ha id eller liknande efter också?
  await wrapper.vm.$nextTick();

  expect(wrapper.findComponent(Home).exists()).toBe(true);
});

// SHOEINFO
it('Renders ShoeInfo view via routing', async () => {
  const router = new VueRouter({ routes }),
    wrapper = mount(App, {
      localVue,
      router,
    });

  router.push('/shoeinfo'); // Ska vi ha id eller liknande efter också?
  await wrapper.vm.$nextTick();

  expect(wrapper.findComponent(ShoeInfo).exists()).toBe(true);
});

// Cart
it('Renders Cart view via routing', async () => {
  const router = new VueRouter({ routes }),
    wrapper = mount(App, {
      localVue,
      router,
    });

  router.push('/cart'); // Ska vi ha id eller liknande efter också?
  await wrapper.vm.$nextTick();

  expect(wrapper.findComponent(Cart).exists()).toBe(true);
});
