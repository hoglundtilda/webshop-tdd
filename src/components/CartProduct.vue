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
          type="number"
          max="10"
          :value="product.qty"
          @input="updateQty($event, product)"
        />
        <p class="price">{{product.totalPrice}}:-</p>
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
    totalPrice() {},
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    },
    updateQty(e, product) {
      if (e.target.value !== "") {
        if (e.target.value == 0 || e.target.value == "0") {
          this.removeFromCart(product);
        } else {
          let value = e.target.value;
          this.$store.dispatch("updateQty", {
            product: product,
            value: value,
          });
        }
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
  margin-bottom: 10px;
  padding: 1rem;
  width: 500px;
  background-color: $white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.numberof_items {
  width: 2.5rem;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.cartitem_information {
}

.price {
  color: $dark !important;
  font-weight: 900;
  font-size: 1.2rem;
  grid-column: 2;
}

.product_title {
  justify-self: flex-start;
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
  font-size: 0.8rem;
  color: #998f8f;
}

.product_image {
  height: 150px;
  object-fit: cover;
}

.value_icon {
  height: 30px;
}

.value_icon:hover {
  height: 30px;
  transform: scale(1.1);
  transition-duration: 200ms;
}

.shoe_information p {
  color: $dark;
  margin: 3px 0;
  font-size: 0.7rem;
}

.shoe_information {
  color: $dark;
  display: flex;
  flex-direction: column;
  column-gap: 10px;

}
</style>
