import { mount, shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Footer);
  });
  test("Check if the component exists", () => {
    let wrapper = mount(Footer);
    let expected = true;
    const footer = wrapper.findComponent(Footer);
    expect(footer.exists()).toBe(expected);
  });
  test("Should not have empty text value ", () => {
    let links = wrapper.findAll("a");
    for (let i = 0; i < links.length; i++) {
      expect(links.at(i).text()).not.toBe(null);
    }
  });
  test("Should not have empty href value", () => {
    let links = wrapper.findAll("a");
    for (let i = 0; i < links.length; i++) {
      expect(links.at(i).element.href).not.toBe("http://localhost/" || "");
    }
  });
  test("Should check for correct value in href for Socil media links", () => {
    let links = wrapper.findAll("a");
    for (let i = 0; i < links.length; i++) {
      expect(links.at(0).element.href).toBe("https://www.twitter.com/");
      expect(links.at(1).element.href).toBe("https://www.instagram.com/");
      expect(links.at(2).element.href).toBe("https://www.facebook.com/");
    }
  });
});
