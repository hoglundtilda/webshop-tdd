<template>
  <section class="shopping_cart">
    <Nav class="nav" />
    <div v-if="shoppingCart >= 1" class="checkout_section">
      <CartProduct />
      <CheckOut class="checkout" />
    </div>
    <Footer class="footer" />
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
.checkout_section {
  display: flex;
  margin: 0 10rem;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.shopping_cart {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(../assets/img/bg-payment.png);
  background-position: bottom, left;
  min-height: 100vh;
  background-size: cover;
}

.empty_cart {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
