import Home from "@/views/Home";
import ShoeInfo from "@/views/ShoeInfo.vue";
import Cart from "@/views/Cart.vue";
import Payment from "@/views/Payment";
import OrderComplete from "@/views/OrderComplete";
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/ShoeInfo/:shoe",
    name: "ShoeInfo",
    component: ShoeInfo,
  },
  {
    path: "/Payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/orderComplete",
    name: "OrderComplete",
    component: OrderComplete,
  },
];
