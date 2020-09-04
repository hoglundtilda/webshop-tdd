export default {
  totalPrice(state) {
    let items = state.shoppingCart.map((product) => {
      return product.qty * parseInt(product.price);
    });
    return items.reduce(function(prev, current) {
      return prev + current;
    }, 0);
  },
};
