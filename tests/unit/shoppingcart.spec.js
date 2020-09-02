import { mount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart";

describe("ShoppingCart", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ShoppingCart, {
      mocks: {
        $store: {
          state: { shoppingCart: ["dsadasd", "hej", "hejdå", "ochADJLs"] },
        },
      },
    });
  });
  test("Check if the component exists", () => {
    let expected = true;
    const shoppingCart = wrapper.findComponent(ShoppingCart);
    expect(shoppingCart.exists()).toBe(expected);
  });
  test("Shoppingcart value should be 0 when rendered", () => {
    
  });
});
