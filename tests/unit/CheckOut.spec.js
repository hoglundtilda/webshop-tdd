import getters from "@/store/modules/getters.js";
import actions from "@/store/modules/actions.js";

test("Returns the total price of all the products in the shoppingcart", () => {
  const state = {
    shoppingCart: [
      { qty: 2, price: 895 },
      { qty: 1, price: 1395 },
      { qty: 3, price: 4495 },
    ],
  };
  const result = getters.totalPrice(state);
  expect(result).toBe(16670);
});

test('Should remove all products from shoppingCart when clicked on "Töm varukorgen', () => {});

describe("EmptyCart", () => {
  it("Should remove products from the cart", async () => {
    const commit = jest.fn();
    const state = {
      shoppingCart: [
        { qty: 2, price: 895 },
        { qty: 1, price: 1395 },
        { qty: 3, price: 4495 },
      ],
    };
    await actions.emptyCart({ commit }, state.shoppingCart);

    expect(commit).toHaveBeenCalledWith("emptyCart", );
  });
});
