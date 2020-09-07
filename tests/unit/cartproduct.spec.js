import mutations from "@/store/modules/mutations.js";
import actions from "@/store/modules/actions.js";
import CartProduct from "@/components/CartProduct";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";

it("Should test the dispatch is being called with correct params", async () => {
  const commit = jest.fn();
  const ctx = { commit };
  const product = { qty: 1, price: 1395 };
  await actions.removeFromCart(ctx, product);
  expect(commit).toHaveBeenCalledWith("removeFromCart", product);
});

it("Should remove the selected product from the shoppingcart", () => {
  const product = { qty: 1, price: 1395 };
  const state = {
    shoppingCart: [product, { qty: 2, price: 1895 }, { qty: 1, price: 4495 }],
  };
  mutations.removeFromCart(state, product);
  expect(state.shoppingCart.indexOf(product)).toBe(-1);
});

it("Should update the quantity of the product based on value in the input field", () => {
  const product = { qty: 1, price: "1395" };
  const value = 5;

  const expectedValue = value;

  const object = { product: product, value: value };
  const state = {};
  mutations.updateQty(state, object);
  expect(object.product.qty).toBe(expectedValue);
});

it("dispatches an action when a button is clicked", async () => {
  const product = {
    id: "0003",
    brand: "Fila",
    name: "ORBIT ZEPPA",
    type: "Sneakers",
    price: "879,00",
    color: "Black",
    material: {
      Yttermaterial: "Skinn och textil",
      Foder: "Textil",
      Innersula: "Skinnimitation",
      Sula: "Konstmaterial",
      Fodertjocklek: "Tunt foder",
    },
    productinfo: {
      Tå: "Rund",
      "Klack/Sula": "Genomgående platå",
      Förslutning: "Snörning",
      Mönster: "Enfärgat",
      Artikelnummer: "1FI11A005-Q11",
    },
    sizes: "40",
    images: [
      "fila/fila_orbit_zeppa_1.png",
      "fila/fila_orbit_zeppa_2.png",
      "fila/fila_orbit_zeppa_3.png",
    ],
    qty: 1,
    totalPrice: 879,
  };
  const mockStore = {
    dispatch: jest.fn(),
    state: {
      shoppingCart: [product],
    },
  };

  const wrapper = mount(CartProduct, {
    mocks: {
      $store: mockStore,
    },
  });

  await wrapper.find(".remove").trigger("click");

  expect(mockStore.dispatch).toHaveBeenCalledWith("removeFromCart", product);
});
