<template>
  <section class="shopping_cart">
    <Nav class="nav" />
    <div v-if="shoppingCart >= 1" class="checkout_section">
      <CartProduct />
      <CheckOut />
    </div>
    <Footer />
    <EmptyCart v-if="shoppingCart < 1" class="empty_cart" />
  </section>
</template>

<script>
import EmptyCart from "@/components/EmptyCart";
import Footer from "@/components/Footer";
import CheckOut from "@/components/Checkout";
import CartProduct from "@/components/CartProduct";
import Nav from "@/components/Nav";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
    CartProduct,
    CheckOut,
    Footer,
    EmptyCart,
  },
  computed: {
    ...mapState({
      shoppingCart: (state) => state.shoppingCart.length,
    }),
  },
};
</script>

<style lang="scss" scoped>
.shopping_cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100;
  min-height: 100vh;
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

.empty_cart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
