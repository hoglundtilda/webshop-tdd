<template>
  <section class="payment">
    <Spinner v-if="!sendingOrder" />
    <Nav class="nav" />
    <div class="summary_information">
      <Summary v-if="shoppingCart.length !== 0" />"
      <MakePayment v-if="shoppingCart.length !== 0" />
    </div>
    <Footer class="footer" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Summary from "@/components/Summary";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MakePayment from "@/components/MakePayment";
import Spinner from "@/components/Spinner";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["shoppingCart", "sendingOrder"]),
  },
  components: {
    Nav,
    Footer,
    Summary,
    MakePayment,
    Spinner,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.payment {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(../assets/img/bg-payment.png);
  background-position: bottom, left;
  min-height: 100vh;
  background-size: cover;
}

.summary {
  text-align: center;
  background-color: $white;
  margin-bottom: auto;
}

.footer {
  margin-top: 2rem;
}

.summary_information {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.nav {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>