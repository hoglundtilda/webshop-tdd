export default {
  addToCart(state, shoe) {
    shoe.totalPrice = parseInt(shoe.price) * parseInt(shoe.qty);

    state.shoppingCart.push(shoe);
  },
  removeFromCart(state, product) {
    const cartIndex = state.shoppingCart.indexOf(product);
    state.shoppingCart.splice(cartIndex, 1);
  },
  updateQty({}, product) {
    let value = product.value;
    let cartItem = product.product;
    cartItem.qty = parseInt(value);
    cartItem.totalPrice = parseInt(cartItem.price) * parseInt(cartItem.qty);
  },
  emptyCart(state) {
    state.shoppingCart = [];
  },
  sendOrder(state, value) {
    state.sendingOrder = value;
  },
  resetSendingOrder(state, value) {
    state.sendingOrder = value;
  },
};
