<template>
    <div class="v-cart-item">
        <div class="v-cart-item__image">
            <img class="item_img" :src=" require('../assets/img/' + cart_item_data.images)" alt="photo">
        </div>
        <div class="v-cart-item__title">
                <p>{{ cart_item_data.title }}</p>
            </div>
            <div class="v-cart-item__price">
                <p>{{ cart_item_data.price }}</p>
            </div>
            <div class="v-cart-item__qty">
                <button @click="decrementItemQty" class="decrement"><font-awesome-icon :icon="['fas', 'minus']" /></button>
                    <p>{{ cart_item_data.quantity }}</p>
                <button @click="incrementItemQty" class="increment"><font-awesome-icon :icon="['fas', 'plus']" /></button>
            </div>
            <div class="v-cart-item__subtotal">
                <p>{{ cart_item_data.price * cart_item_data.quantity }}</p>
            </div>
            <div class="v-cart-item__clear">
                <button @click="deleteFromCart">удалить</button>
            </div>
    </div>
</template>

<script>
export default {
   name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        decrementItemQty() {
            this.$emit('decrementItemQty');
        },

        incrementItemQty() {
            this.$emit('incrementItemQty');
        },
        
        deleteFromCart() {
            this.$emit('deleteFromCart');
        }
    },
    computed: {},
    mounted() {} 
}
</script>

<style>
    .v-cart-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 2px;
        border-bottom: 1px solid #f16d7f;
    }
    .item_img {
        width: 120px;
    }
</style>