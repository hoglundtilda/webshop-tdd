import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";

describe("Products", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Products);
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