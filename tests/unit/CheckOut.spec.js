import getters from "@/store/modules/getters.js";

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
