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

    //Testar att du kommer till sidan ShoeInfo när du klickar på en sko
    it("Renders ShoeInfo view via routing", async() => {
        const router = new VueRouter({ routes }),
            wrapper = mount(App, {
                localVue,
                router,
            });

        router.push("/ShoeInfo/");
        await wrapper.vm.$nextTick();

        expect(wrapper.findComponent(ShoeInfo).exists()).toBe(true);
    });
});