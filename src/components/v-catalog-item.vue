<template>
    <div class="v-catalog-item">
        <v-popup 
            v-if="isPopupVisible"
            @closePopup="closeLearnMore">
            <div class="v-popup__header">
                <div class="v-popup__header_title">
                    <p>Наименование: {{ product_data.title }}</p>
                </div>
                <div class="v-popup__header_navinfo">
                    <p>код товара: {{ product_data.id }}</p>
                    <a href="#" class="feedback">отзывы: 77</a>
                    <p><font-awesome-icon :icon="['fas', 'heart']" /> в избранное</p>
                    <p>сравнить</p>
                </div>
            </div>
            <div class="v-popup__body">
                <img class="popup__img" :src=" require('../assets/img/' + product_data.images)" alt="photo">
                <div class="v-popup__description">
                    <p class="v-popup-desc">{{ product_data.description }}</p>
                    <p class="v-popup-price">$ {{ product_data.price }}</p>
                    <div class="v-popup__discr_btn">
                        <button class="v-popup_add_btn" @click="addToCart">add to cart</button><br>
                        <button class="v-popup_close_btn" @click="closeLearnMore">close</button>
                    </div>
                    
                </div>
            </div> 
            <div class="v-popup__footer">
                
            </div>
        </v-popup>
        <a href="#">
            <img class="product__img" :src=" require('../assets/img/' + product_data.images)" alt="photo">
        </a>
			<div class="product__content">
				<a href="#" class="product__name">{{ product_data.title }}</a>
				<p class="product__price">${{ product_data.price }}
                    <!-- <img class="product__star" src="../assets/img/star.png" alt="star"> -->
                    <button class="product__star"
                        @click="showLearnMore"
                        >learn more
                    </button>
                </p>
			</div>
        <button class="v-catalog-item-add"
            @click="addToCart">
            <img src="../assets/img/cartWhite.png" alt="cart">Add to Cart
        </button>
    </div>
</template>

<script>
import vPopup from './popup/v-popup'

export default {
    name: "v-catalog-item",
    components: {
        vPopup
    },
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isPopupVisible: false
        }
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data);
        },
        showLearnMore() {
            this.isPopupVisible = true;
        },
        closeLearnMore() {
            this.isPopupVisible = false;
        }
    },
    mounted() {
        // this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style>
    .feedback {
        color: #2c3e50;
    }
</style>