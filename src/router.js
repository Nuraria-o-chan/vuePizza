import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import Cart from "@/pages/Cart.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    { path: "/:pathMatch(.*)*", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router