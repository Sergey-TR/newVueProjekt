<template>
     <div class="v-women center">
         <h1 class="v-catalog_h1">for women</h1>
         <div class="v-catalog-box">
                <v-catalog-item 
                    v-for="product in viewWomenProduct"
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
    name: 'v-women',
    components: {
        vCatalogItem
    },
    props: {
        
    },
    data() {
        return{};
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
         viewWomenProduct() {
            this.womenProducts = [];
            let vm = this;
            this.PRODUCTS.map(function (item) {
                if (item.categoryId == 2) {
                    vm.womenProducts.push(item);
                }               
            }) 
           return this.womenProducts;            
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