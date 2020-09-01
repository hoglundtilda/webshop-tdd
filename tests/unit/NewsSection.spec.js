import { shallowMount } from "@vue/test-utils";
import NewsSection from "@/components/NewsSection";

describe("NewsSection", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(NewsSection);
  });
  test("Check so the component is being rendered", () => {
    let expected = true;
    const newsSection = wrapper.findComponent(NewsSection);
    expect(newsSection.exists()).toBe(expected);
  });
  
});
