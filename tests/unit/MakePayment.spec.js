import MakePayment from "@/components/MakePayment";
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import routes from "@/router/routes.js";
import VueRouter from "vue-router";

import Vuex from "vuex";
import store from "@/store/index.js";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter({ routes });

describe("MakePayment", () => {
  it("Should click the send order button and check to the route is pushing to /orderComplete", async () => {
    const wrapper = mount(MakePayment, {
      localVue,
      store,
      router,
    });

    const spy = jest.spyOn(router, "push");
    const route = "/orderComplete";
    await wrapper.find(".send_button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(spy).toHaveBeenCalledWith(route);
  });
});
