import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import CartProduct from "@/components/CartProduct";

const localVue = createLocalVue();
localVue.use(Vuex);

const shoppingCartItems = ["1", "2", "3", "4"];
const store = new Vuex.Store({
  state: {
    shoppingCartItems: Array,
  },
});

describe("CartProduct", () => {
  it("Should check correct number of products is being rendered from how many items is in the cart", () => {
    const wrapper = mount(CartProduct, {
      store,
      localVue,
    });

    const expected = shoppingCartItems.length;
    const actual = wrapper.findAll("li").length;
    console.log(shoppingCartItems);
    expect(actual).toBe(expected);
  });
});
