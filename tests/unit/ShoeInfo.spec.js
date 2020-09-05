import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import CartButton from "@/components/CartButton.vue";
import ShoeInfo from "@/views/ShoeInfo.vue";
import jsonProducts from "@/assets/products.json";
import Vuex from "vuex";
import Vue from "vue";

// Because it was harder than we thought to test vuex this test is written when view/component already is built.
// Therefore the test might be more advanced than it should have been.
// But we have learned a lot about testing vuex and are happy that we got it green!

const localVue = createLocalVue().use(Vuex);
Vue.use(Vuex);

describe("ShoeInfo.vue", () => {
  // because ShoeInfo relies on params: mock route, with params used in routes.js
  // pass props to get the right shoe through computed properties

  const shoe = "AD115O0OM-G11";
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

  it("should display correct shoe when router push to shoeinfo/params", () => {
    const shoe_artikelnummer = wrapper.find(".article_number"),
      actual = shoe_artikelnummer.text(),
      expected = `Artikelnummer: ${shoe}`;

    expect(actual).toBe(expected);
  });

  test("addToCart action should be called when user adds a product to cart", async () => {
    const addButton = wrapper.find(".addToCart"),
      selectSize = wrapper.findAll(".options");

    await selectSize.at(3).setSelected();
    await addButton.trigger("click");

    expect(actions.addToCart).toHaveBeenCalled();
  });

  it("should display a message when selected size is out of stock", async () => {
   const selectSize = wrapper.findAll(".options");

  await selectSize.at(4).setSelected();

  const message = wrapper.find(".outOfStockMessage");

  expect(message.exists()).toBe(true)

  })

});
