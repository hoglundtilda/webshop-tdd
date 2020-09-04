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
    it("Should display search/filter component when rendered", () => {
        const filter = wrapper.findComponent(FilterSearch);

        expect(filter.exists()).toBe(true);
    });

    // Visas alla produkter som finns i json när products renderas?
    it("Should display all products from json when rendered", () => {
        const productsArray = wrapper.findAll("li"),
            actual = productsArray.length,
            expected = productsJSON.products.length;
        //console.log(productsJSON.products.length);

        expect(actual).toBe(expected);
    });
    it("Should check so you can se the price on rendering", () => {
        let actual = "1395,00 kr";

        const price = wrapper
            .findAll(".productPrice")
            .at(1)
            .text();
        console.log(price);
        expect(actual).toBe(price);
    });
    it("Should check so you can se the name fo the manufacturer on rendering", () => {
        let actual = "Jordan";

        const manufacturer = wrapper
            .findAll(".productBrand")
            .at(4)
            .text();
        console.log(manufacturer);
        expect(actual).toBe(manufacturer);
    });
    it("Should check so you can se the name fo the model of the shoes on rendering", () => {
        let actual = "UA OLD SKOOL";

        const model = wrapper
            .findAll(".productModel")
            .at(9)
            .text();
        console.log(model);
        expect(actual).toBe(model);
    });
});