<template>
  <article class="cart_item">
    <div class="product_image">
      <img src="" alt="" />
    </div>
    <div class="shoe_information">
      <h5></h5>
      <p></p>
      <p></p>
      <p></p>
      <div class="remove">
        <img src="" alt="" />
      </div>
    </div>
    <div class="cartitem_information">
      <input type="text" />
      <p class="price"></p>
    </div>
  </article>
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
  height: auto;
  width: 400px;
  background-color: $white;
}
</style>
