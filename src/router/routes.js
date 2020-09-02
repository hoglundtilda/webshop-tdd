import Home from "@/views/Home";
import ShoeInfo from "@/views/ShoeInfo.vue";
export default [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/ShoeInfo/:shoe",
        name: "ShoeInfo",
        component: ShoeInfo,
    },
];