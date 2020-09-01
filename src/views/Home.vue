<template>
  <div class="home">
    <NewsSection />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
export default {
  name: "Home",
  components: {
    Footer,
    NewsSection,
  },
};
</script>
