<template>
  <section>
    <article v-for="(cartItem, index) in shoppingCart" :key="index" class="cart_item">
      <div class="product_image">
        <img src alt />
      </div>
      <div class="shoe_information">
        <h5 class="product_title">Nmr1 Sport</h5>
        <p>Sneaker: Adidas Performance</p>
        <p>Färg: Röd</p>
        <p>Storlek: 43</p>
        <div class="remove">
          <img src="../assets/img/delete.png" alt />
          <p>Ta bort</p>
        </div>
      </div>
      <div class="cartitem_information">
        <input class="numberof_items" type="text" />
        <p class="price">2349:-</p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState["shoppingCart"],
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.cart_item {
  font-weight: 900;
  max-height: 180px;
  padding: 1rem;
  min-width: 500px;
  display: grid;
  justify-items: center;
  grid-template-columns: 20% 60% 20%;
  background-color: $white;
}

.numberof_items {
  width: 2.5rem;
  text-align: center;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cartitem_information {
  display: flex;
  justify-content: space-between;
}

.price {
  color: $dark !important;
  font-weight: 900;
  font-size: 1.2rem;
}

.product_title {
  font-weight: 900;
  font-size: 1.2rem;
}

.remove {
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: -3px;
}

.cart_item p {
  color: #998f8f;
}
</style>
