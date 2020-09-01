import { shallowMount } from "@vue/test-utils";
import NewsSection from "@/components/NewsSection";

describe("NewsSection", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(NewsSection);
  });
  test("Check if the component exists", () => {
    let expected = true;
    const newsSection = wrapper.findComponent(NewsSection);
    expect(newsSection.exists()).toBe(expected);
  });
  test("Should check there is 4 articles inside the component", () => {
    let article = wrapper.find("article");
    let expectedLength = 4;
    expect(article.length === expectedLength);
  });
});
