export default {
  addToCart(state, shoe) {
    shoe.totalPrice = parseInt(shoe.price) * parseInt(shoe.qty);

    state.shoppingCart.push(shoe);
  },
  removeFromCart(state, product) {
    const cartIndex = state.shoppingCart.indexOf(product);
    state.shoppingCart.splice(cartIndex, 1);
  },
  updateQty(state, product) {
    console.log(state);
    let value = product.value;

    let cartItem = product.product;
    cartItem.qty = parseInt(value);
    cartItem.totalPrice = parseInt(cartItem.price) * parseInt(cartItem.qty);
  },
};
