<template>
    <div class="v-catalog center">
        <h1 class="v-catalog_h1">catalog</h1>
            <div class="v-catalog-box">
                <v-catalog-item 
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :product_data="product"
                    @addToCart="addToCart">            
                </v-catalog-item>
            </div>    
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "v-catalog",
    components: {
        vCatalogItem
    },
    props: {},
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods: {
        ...mapActions ([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if(response.data) {
                console.log('DATA ARRIVED!')
            }
        })
    }
}
</script>

<style>
    .v-catalog {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .v-catalog_h1 {
        text-transform: uppercase;
    }
    .center {
        padding: 0 calc(50% - 570px);
    }
</style>