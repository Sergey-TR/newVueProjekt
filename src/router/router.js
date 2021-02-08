import Vue from 'vue'
import Router from 'vue-router'

import vHome from '../components/v-home.vue'
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }
    ]
});

export default router;