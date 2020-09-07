<template>
  <section class="complete_section">
    <Nav class="nav" />
    <div>
      <article class="order_done">
        <h3>Tack för din beställning</h3>
        <img class="shoe_icon" src="../assets/img/shoe.svg" />
        <p class="order_number_info">Ordernummer:</p>
        <p class="order_number">{{orderNumber}}</p>
        <p class="on_the_way">Dina skor är nu på väg till dig</p>
        <button @click="toHome" class="home_button">TILLBAKA TILL STARTSIDAN</button>
      </article>
    </div>
    <Footer />
  </section>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.commit("resetSendingOrder", true);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["sendingOrder", "orderNumber"]),
  },
  components: {
    Nav,
    Footer,
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.complete_section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/bg-payment.png);
  background-position: bottom, left;
  height: 100vh;
  background-size: cover;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.order_done {
  row-gap: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
  width: 30vw;
  color: $dark;
  background-color: $color;
}

.shoe_icon {
  height: 150px;
  animation: rotation 10s infinite linear;
}

.nav {
  width: 100%;
  position: absolute;
  top: 0;
}

.home_button {
  width: 100%;
  margin-top: 1rem;
  background-color: $dark;
  color: $white;
  padding: 1rem 0rem;
  border: none;
  outline: none;
}

.home_button:active {
  transform: scale(1.03);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.order_number_info {
  font-weight: 700;
}

.order_number {
  margin-top: -15px;
}

.on_the_way {
  font-size: 1.4rem;
}
</style>