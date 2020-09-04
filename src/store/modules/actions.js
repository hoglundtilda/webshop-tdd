export default {
  addToCart(ctx, shoe) {
    ctx.commit("addToCart", shoe);
  },
  removeFromCart(ctx, product) {
    ctx.commit("removeFromCart", product);
  },
  updateQty(ctx, product) {
    ctx.commit("updateQty", product);
  },
};
