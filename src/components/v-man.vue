<template>
     <div class="v-man center">
         <h1 class="v-catalog_h1">for man</h1>
         <div class="v-catalog-box">
                <v-catalog-item 
                    v-for="product in viewManProduct"
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
    name: 'v-man',
    components: {
        vCatalogItem
    },
    props: {
        
    },
    data() {
        return{
            //manProducts: []
        };
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
         viewManProduct() {
            this.manProducts = [];
            let vm = this;
            this.PRODUCTS.map(function (item) {
                if (item.categoryId == 1) {
                    vm.manProducts.push(item);
                }               
            }) 
           return this.manProducts;            
        }   
    },
    methods: {
        ...mapActions ([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data);
        },
        
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

</style>