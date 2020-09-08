export default {
  addToCart(state, shoe) {
    if (shoe.sale) {
      shoe.totalPrice = parseInt(shoe.sale) * parseInt(shoe.qty);
    } else {
      shoe.totalPrice = parseInt(shoe.price) * parseInt(shoe.qty);
    }
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
    if (cartItem.sale) {
      cartItem.totalPrice = parseInt(cartItem.sale) * parseInt(cartItem.qty);
    } else {
      cartItem.totalPrice = parseInt(cartItem.price) * parseInt(cartItem.qty);
    }
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
  generateOrderNr(state) {
    let letters = ['X', 'Y', 'Z'];
    state.orderNumber = `AB${Date.now()}${
      letters[Math.floor(Math.random() * letters.length)]
    }`;
  },
};
