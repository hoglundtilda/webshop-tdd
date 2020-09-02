import Home from '@/views/Home';
import ShoeInfo from '@/views/ShoeInfo.vue';
import Cart from '@/views/Cart.vue';
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/ShoeInfo/:shoe',
    name: 'ShoeInfo',
    component: ShoeInfo,
  },
];
