import Vue from 'vue'
import Router from 'vue-router'

import vHome from '../components/v-home.vue'
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart.vue'
import vMan from '../components/v-man.vue'
import vWomen from '../components/v-women.vue'

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
            path: '/man',
            name: 'man',
            component: vMan
        },
        {
            path: '/women',
            name: 'women',
            component: vWomen
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