import getters from "@/store/modules/getters.js";
import actions from "@/store/modules/actions.js";
import mutations from "@/store/modules/mutations.js";

test("Returns the total price of all the products in the shoppingcart with free shipping", () => {
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

test("Returns the total price of all the products in the shoppingcart with deliverycost", () => {
  const state = {
    shoppingCart: [
      { qty: 2, price: 895 },
      { qty: 1, price: 1395 },
      { qty: 3, price: 4495 },
    ],
  };
  const result = getters.totalPriceWithDeliveryCost(state);
  expect(result).toBe(16739);
});

describe("", () => {
  it("Should test the dispatch is being called with correct params", async () => {
    const commit = jest.fn();
    const ctx = { commit };
    await actions.emptyCart(ctx);
    expect(commit).toHaveBeenCalledWith("emptyCart");
  });
});

describe("Mutations", () => {
  it("Should remove all the products from the shoppingCart", () => {
    const state = {
      shoppingCart: [
        { qty: 2, price: 895 },
        { qty: 2, price: 895 },
        { qty: 2, price: 895 },
        { qty: 2, price: 895 },
        { qty: 2, price: 895 },
        { qty: 2, price: 895 },
      ],
    };
    mutations.emptyCart(state);
    expect(state.shoppingCart).toStrictEqual([]);
  });
});
