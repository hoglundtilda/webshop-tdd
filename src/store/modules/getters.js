export default {
    totalPrice(state) {
        let items = state.shoppingCart.map((product) => {
            if (product.sale) {
                return product.qty * parseInt(product.sale);

            } else {
                return product.qty * parseInt(product.price);

            }
        });
        return items.reduce(function(prev, current) {
            return prev + current;
        }, 0);
    },
    totalPriceWithDeliveryCost(state) {
        let items = state.shoppingCart.map((product) => {
            return product.qty * parseInt(product.price);
        });
        return items.reduce(function(prev, current) {
            return prev + current;
        }, 69);
    },
};