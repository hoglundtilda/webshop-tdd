<template>
  <section class="send_order">
    <div>
      <h3 class="total_title">Totalsumma</h3>
    </div>
    <div>
      <p>Varukorg:</p>
      <p>{{totalPrice}}:-</p>
    </div>
    <div>
      <p>Frakt:</p>
      <p v-if="totalPrice < 1000">{{deliveryCost}}:-</p>
      <p v-else>{{freeDeliveryCost}}:-</p>
    </div>
    <div class="divider"></div>
    <div>
      <p>Total (inkl moms):</p>
      <p v-if="totalPrice < 1000">{{totalPriceWithDeliveryCost}}</p>
      <p v-else>{{totalPrice}}</p>
    </div>
    <button @click="sendOrder" class="send_button">SKICKA BESTÄLLNING</button>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["totalPrice", "totalPriceWithDeliveryCost"]),
    ...mapState([
      "freeDeliveryCost",
      "deliveryCost",
      "shoppingCart",
      "sendingOrder",
    ]),
  },
  methods: {
    ...mapActions(["emptyCart"]),
    sendOrder() {
      this.$store.commit("sendOrder", false);
      this.$store.commit("generateOrderNr");
      setTimeout(() => {
        this.$router.push("/orderComplete");
      }, 2000);
      this.$store.dispatch("emptyCart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.summary {
  background: #ffff;
}

.send_order {
  padding: 1rem;
  background-color: $white;
}

.send_button {
  width: 100%;
  margin-top: 1rem;
  background-color: $dark;
  color: $white;
  padding: 1rem 0rem;
  border: none;
  outline: none;
}

.send_button:active {
  transform: scale(1.03);
}

div {
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
}
</style>>

