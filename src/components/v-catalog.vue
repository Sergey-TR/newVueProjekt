<template>
    <div class="v-catalog center">
        <h1 class="v-catalog_h1">catalog</h1>
            <div class="v-catalog-box">
                <v-catalog-item 
                    v-for="product in paginateProducts"
                    :key="product.id"
                    :product_data="product"
                    @addToCart="addToCart">            
                </v-catalog-item>
            </div> 
            <button class="continueSopping"
                @click="nextShow"
            >show next products</button>   
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
    props: {
        products_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
           productsOnPage: 4,
           pageNumber: 1
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        paginateProducts() {
            let from = (this.pageNumber - 1) * this.productsOnPage;
            let to = from + this.productsOnPage;
            return this.PRODUCTS.slice(0, to);
        }
    },
    methods: {
        ...mapActions ([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        nextShow() {
            this.pageNumber = this.pageNumber + 1;
        },
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