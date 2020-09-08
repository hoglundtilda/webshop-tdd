<template>
  <section class="checkout">
    <div>
      <h5 class="total_title">Totalsumma</h5>
    </div>
    <div>
      <p>Varukorg:</p>
      <p>{{totalPrice}}:-</p>
    </div>
    <div>
      <p>Frakt:</p>
      <p v-if="totalPrice < 1000">{{deliveryCost}}</p>
      <p v-else>{{freeDeliveryCost}}</p>
    </div>
    <div class="divider"></div>
    <div>
      <p>Total (inkl moms):</p>
      <p v-if="totalPrice < 1000">{{totalPriceWithDeliveryCost}}</p>
      <p v-else>{{totalPrice}}</p>
    </div>
    <button @click="toPayment" class="checkout_button">VIDARE TILL BETALNING</button>
    <button @click="emptyCart" class="empty_cart">TÖM VARUKORGEN</button>
    <p class="delivery_cost">Fraktfritt om du handlar för mer än 1000:-</p>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["totalPrice", "totalPriceWithDeliveryCost"]),
    ...mapState(["freeDeliveryCost", "deliveryCost", "shoppingCart"]),
  },
  methods: {
    emptyCart() {
      this.$store.dispatch("emptyCart");
    },
    toPayment() {
      this.$router.push("/Payment");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.checkout {
  padding: 1rem;
  background-color: $white;
}

.divider {
  margin: 10px 0px;
  height: 2px;
  background-color: rgb(231, 231, 231);
  width: 100%;
}

.checkout_button {
  width: 100%;
  margin-top: 1rem;
  background-color: $dark;
  color: $white;
  padding: 1rem 0rem;
  border: none;
  outline: none;
}

.checkout_button:active {
  transform: scale(1.03);
}

.total_title {
  font-size: 2rem;
  font-weight: 900;
}

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.delivery_cost {
  font-size: 0.7rem;
}

.empty_cart {
  color: $dark !important;
  width: 100%;
  margin-top: 1rem;
  background-color: $color;
  color: $white;
  padding: 1rem 0rem;
  border: none;
  outline: none;
}

.empty_cart:active {
  transform: scale(1.03);
}
</style>
