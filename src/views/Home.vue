<template>
  <div class="home">
    <Header />
    <NewsSection />
    <Products />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import Products from "@/components/Products.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    NewsSection,
    Products,
  },
};
</script>
