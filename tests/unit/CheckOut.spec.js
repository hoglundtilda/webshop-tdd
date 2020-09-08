import getters from "@/store/modules/getters.js";
import actions from "@/store/modules/actions.js";
import mutations from "@/store/modules/mutations.js";
import CheckOut from "@/components/CheckOut";
import Payment from "@/views/Payment";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import routes from "@/router/routes.js";
import VueRouter from "vue-router";
import { sync } from "vuex-router-sync";
import Vuex from "vuex";
import store from "@/store/index.js";
import App from "@/App";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter({ routes });

describe("CheckOut", () => {
  let shoppingCart, product, getters;
  beforeEach(() => {
    getters = {
      totalPrice: () => 3985,
      totalPriceWithDeliveryCost: () => 4200,
    };
    product = {
      id: "0004",
      brand: "Iceberg",
      name: "KAKKOI",
      type: "Höga sneakers",
      price: "4495,00",
      color: "Multicolor",
      material: {
        Yttermaterial: "Konstmaterial/textil",
        Foder: "Textil",
        Innersula: "Textil",
        Sula: "Konstmaterial",
        Fodertjocklek: "Tunt foder",
      },
      productinfo: {
        Tå: "Rund",
        "Klack/sula": "Platt",
        Förslutning: "Elastisk snörning",
        Mönster: "Enfärgat",
        Artikelnummer: "IC312N002-T11",
      },
      sizes: "38",
      images: [
        "iceberg_kakkoi/iceberg_kakkoi_1.png",
        "iceberg_kakkoi/iceberg_kakkoi_2.png",
        "iceberg_kakkoi/iceberg_kakkoi_3.png",
      ],
      qty: 1,
      totalPrice: 4495,
    };
    shoppingCart = [
      {
        id: "0014",
        brand: "DKNY",
        name: "BREA",
        type: "Slip-ins",
        price: "889,00",
        color: "Red",
        material: {
          Yttermaterial: "Konstmaterial/textil",
          Foder: "Textil",
          Innersula: "Textil",
          Sula: "Konstmaterial",
          Fodertjocklek: "Tunt foder",
        },
        productinfo: {
          Tå: "Rund",
          "Klack/sula": "Platt",
          Förslutning: "Elastisk snörning",
          Mönster: "Enfärgat",
          Artikelnummer: "DK111A06H-G11",
        },
        sizes: "36",
        images: [
          "dkny_3/image_14.png",
          "dkny_3/image_15.png",
          "dkny_3/image_16.png",
        ],
        qty: 1,
        totalPrice: 889,
      },
      {
        id: "0019",
        brand: "Jordan",
        name: "WESTBROOK ONE TAKE",
        type: "Indoorskor",
        price: "1279,00",
        color: "Multicolor",
        material: {
          Yttermaterial: "Konstmaterial/textil",
          Foder: "Textil",
          Innersula: "Textil",
          Sula: "Konstmaterial",
          Fodertjocklek: "Tunt foder",
        },
        productinfo: {
          Tå: "Rund",
          "Klack/sula": "Platt",
          Förslutning: "Elastisk snörning",
          Mönster: "Enfärgat",
          Artikelnummer: "JOC42A02W-J11",
        },
        sizes: "40",
        images: [
          "jordans_4/image_29.png",
          "jordans_4/image_30.png",
          "jordans_4/image_31.png",
        ],
        qty: 1,
        totalPrice: 1279,
      },
      {
        id: "0022",
        brand: "Steve Madden",
        name: "CHAOS",
        type: "Höga Sneakers",
        price: "1145,00",
        color: "Black/Multicolorr",
        material: {
          Yttermaterial: "Konstmaterial/textil",
          Foder: "Textil",
          Innersula: "Textil",
          Sula: "Konstmaterial",
          Fodertjocklek: "Tunt foder",
        },
        productinfo: {
          Tå: "Rund",
          "Klack/sula": "Platt",
          Förslutning: "Elastisk snörning",
          Mönster: "Enfärgat",
          Artikelnummer: "ST312N00H-T11",
        },
        sizes: "39",
        images: [
          "steve_madden_2/image_38.png",
          "steve_madden_2/image_39.png",
          "steve_madden_2/image_40.png",
        ],
        qty: 1,
        totalPrice: 1145,
      },
      {
        id: "0020",
        brand: "Nike Sportwear",
        name: "AIR MAX 90 UNISEX",
        type: "Sneakers",
        price: "1499,00",
        color: "Black/Green/Red",
        material: {
          Yttermaterial: "Konstmaterial/textil",
          Foder: "Textil",
          Innersula: "Textil",
          Sula: "Konstmaterial",
          Fodertjocklek: "Tunt foder",
        },
        productinfo: {
          Tå: "Rund",
          "Klack/sula": "Platt",
          Förslutning: "Elastisk snörning",
          Mönster: "Enfärgat",
          Artikelnummer: "NI115O01I-Q11",
        },
        sizes: "39",
        images: [
          "nike_air_max_2/image_32.png",
          "nike_air_max_2/image_33.png",
          "nike_air_max_2/image_34.png",
        ],
        qty: 1,
        totalPrice: 1499,
      },
    ];
  });
  test("Should return the price of all the products in the shoppingcart without deliverycost", () => {
    const state = {
      shoppingCart,
    };
    const expectedValue = 3985;
    const result = getters.totalPrice(state);
    expect(result).toBe(expectedValue);
  });
  test("Should return the price of all the products in the shoppingcart with deliverycost", () => {
    const state = {
      shoppingCart,
    };
    const expectedValue = 4200;
    const result = getters.totalPriceWithDeliveryCost(state);
    expect(result).toBe(expectedValue);
  });
  test("Should test emptyCart action to be dispatched with correct params", async () => {
    const commit = jest.fn();
    const ctx = { commit };
    await actions.emptyCart(ctx);
    expect(commit).toHaveBeenCalledWith("emptyCart");
  });
  test("Should test emptyCart mutation to remove all the products from the shoppingCart", () => {
    const state = {
      shoppingCart,
    };
    mutations.emptyCart(state);
    expect(state.shoppingCart).toStrictEqual([]);
  });

  it("renders a child component via routing", async () => {
    const wrapper = mount(CheckOut, {
      localVue,
      store,
      router,
    });

    const spy = jest.spyOn(router, "push");
    const route = "/Payment";

    await wrapper.find(".checkout_button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(spy).toHaveBeenCalledWith(route);
  });

  test("Should test emptyCart dispatch when clicking the remove button", async () => {
    const shoppingCart = [product];
    const mockStore = {
      state: {
        shoppingCart,
        product,
      },
      getters,
      dispatch: jest.fn(),
    };
    const wrapper = mount(CheckOut, {
      mocks: {
        $store: mockStore,
      },
    });
    await wrapper.find(".empty_cart").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith("emptyCart");
  });
});
