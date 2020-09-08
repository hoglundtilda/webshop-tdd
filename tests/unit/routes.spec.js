
import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "@/App.vue";
import routes from "@/router/routes.js";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import CartProduct from "@/components/CartProduct";


// TESTA ATT RÄTT VIEWS RENDERAS FÖR ROUTER LINKS

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("App.vue", () => {
  let store;
  let router;
  let shoppingCart;
  let product;
  beforeEach(() => {
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
    router = new VueRouter({ routes });
    store = new Vuex.Store({
      state: {
        product,
        shoppingCart,
      },
      getters: {
        totalPrice: () => 5,
        totalPriceWithDeliveryCost: () => 10,
      },
    });
  });

  // SHOEINFO
  // Renders ShoeInfo view via routing
  // Testas indirekt i ShoeInfo när den mountas

  // CART
  it("Renders Cart view via routing", async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    });

    router.push("/cart");

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Cart).exists()).toBe(true);
  });
});

// SKRIV test för OrderComplete route
