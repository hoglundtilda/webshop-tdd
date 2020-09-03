<template>
  <section>
    <article v-for="(product, index) in products" :key="index" class="cart_item">
      <div class="product_image">
        <img class="product_image" :src="require(`../assets/img/${product.images[0]}`)" alt />
      </div>
      <div class="shoe_information">
        <h5 class="product_title">{{product.name}}</h5>
        <p>{{product.type}} - {{product.brand}}</p>
        <p>Färg: {{product.color}}</p>
        <p>Storlek: {{product.sizes}}</p>
        <div @click="removeFromCart(product)" class="remove">
          <img src="../assets/img/delete.png" alt />
          <p>Ta bort</p>
        </div>
      </div>
      <div class="cartitem_information">
        <input
          class="numberof_items"
          type="text"
          :value="product.qty"
          @input="updateQty($event, product)"
        />
        <p class="price">{{parseInt(product.price) * product.qty}}:-</p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: (state) => state.shoppingCart,
    }),
    ...mapGetters(["totalPrice"]),
    totalPrice(product) {
      console.log(product);
    },
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    },
    updateQty(e, product) {
      if (e.target.value !== "") {
        let value = e.target.value;
        this.$store.dispatch("updateQty", {
          product: product,
          value: value,
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.cart_item {
  margin-bottom: 1rem;
  font-weight: 900;
  max-height: auto;
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
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: -3px;
}

.cart_item p {
  color: #998f8f;
}

.product_image {
  width: 100%;
  height: 100%;
}
</style>
