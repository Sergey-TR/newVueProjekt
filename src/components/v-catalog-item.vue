<template>
    <div class="v-catalog-item">
        <a href="#"><img class="product__img" :src=" require('../assets/img/' + product_data.images)" alt="photo"></a>
			<div class="product__content">
				<a href="#" class="product__name">{{ product_data.title }}</a>
				<p class="product__price">${{ product_data.price }}
                    <img class="product__star" src="../assets/img/star.png" alt="star">
                </p>
			</div>
        <button class="v-catalog-item-add"
            @click="addToCart">
            <img src="../assets/img/cartWhite.png" alt="cart">Add to Cart
        </button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data);
        }
    },
    mounted() {
        // this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style>

</style>