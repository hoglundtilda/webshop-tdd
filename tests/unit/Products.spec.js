import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import routes from "@/router/routes";
import ShoeInfo from "@/views/ShoeInfo.vue";
import productsJSON from "@/assets/products.json";
import Products from "@/components/Products.vue";
import FilterSearch from "@/components/FilterSearch.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

// Tester för products component
//1. Skall rendera ut antal produkter som finns i jsonfil eller backend
//2. Testa att när du klickar på en sko skall den öppna detaljerad sida för den skon

describe("Products.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Products);
    });

    // Visas filter/search komponenten när products renderas?
    it("Should display SearchFilter component when rendered", () => {
        const filter = wrapper.findComponent(FilterSearch);

        expect(filter.exists()).toBe(true);
    });

    // Visas alla produkter som finns i json när products renderas?
    it("Should display all products from json when rendered", () => {
        const productsArray = wrapper.findAll(".product"),
            actual = productsArray.length,
            expected = productsJSON.products.length;

        expect(actual).toBe(expected);
    });
    it("Price is displayed on products when render", () => {
        let actual = "1395,00 kr";

        const price = wrapper
            .findAll(".productPrice")
            .at(1)
            .text();

        expect(actual).toBe(price);
    });
    it("Brand of the shoe is displayed on product when render", () => {
        let actual = "Jordan";

        const manufacturer = wrapper
            .findAll(".productBrand")
            .at(4)
            .text();

        expect(actual).toBe(manufacturer);
    });
    it("Model name is displayed on the product when render", () => {
        let actual = "UA OLD SKOOL";
        const model = wrapper
            .findAll(".productModel")
            .at(9)
            .text();
        expect(actual).toBe(model);
    });

    it("Sale section should only contain products that is on sale", () => {
        let saleArray = wrapper.findAll(".product_sale");

        const products = productsJSON.products;
        const productsOnSale = products.filter((product) => {
            if (product.sale) {
                return product;
            }
        });
        let checkedItems = [];
        for (let i = 0; i < saleArray.length; i++) {
            if (
                saleArray
                .at(i)
                .text()
                .includes("%")
            ) {
                checkedItems.push(saleArray.at(i));
            }
        }

        const expected = productsOnSale.length;
        const actual = checkedItems.length;

        expect(actual).toBe(expected);
    });
});