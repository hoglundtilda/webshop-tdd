<template>
  <section class="shopping_cart">
    <Nav />
  </section>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.shopping_cart {
  height: 100vh;
  background-image: url("../assets/img/shoes-cart.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
