<template>
  <div class="home">

    <NewsSection />
    <Products />
    <Footer />

  </div>
</template>

<script>

import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import Products from "@/components/Products.vue";
export default {
  name: "Home",
  components: {
    Footer,
    NewsSection,
     Products
  },

};
</script>
