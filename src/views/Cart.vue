<template>
  <section class="shopping_cart">
    <Nav class="nav" />
    <div class="checkout_section">
      <CartProduct />
      <CheckOut />
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/Footer";
import CheckOut from "@/components/Checkout";
import CartProduct from "@/components/CartProduct";
import Nav from "@/components/Nav";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
    CartProduct,
    CheckOut,
    Footer,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.shopping_cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100;
  height: 100vh;
  background-image: url("../assets/img/shoes-cart.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.checkout_section {
  padding: 2rem;
  display: flex;
  margin-bottom: 20rem;
  gap: 3rem;
  justify-content: center;
  flex-direction: row;
}

.nav {
  margin-bottom: 4rem;
}
</style>
