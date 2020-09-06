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
  background-image: url(../assets/img/bg-payment.png);
  background-position: bottom, left;
  height: 100vh;
  background-size: cover;
}

.summary {
  text-align: center;
  background-color: $white;
  margin-bottom: auto;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.summary_information {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
</style>