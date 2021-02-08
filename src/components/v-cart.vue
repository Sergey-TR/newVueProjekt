<template>
    <div class="v-cart center">
        <h1>CART</h1>
        <div v-if="!cart_data.length">
            <p>YOUR CART IS EMPTY</p>
        </div>
        <div v-else class="box_visible">
        <div  class="v-cart-heading">
            <div class="v-cart-heading__image">
                <h3>фото</h3>
            </div>
            <div class="v-cart-heading__title">
                <h3>наименование</h3>
            </div>
            <div class="v-cart-heading__price">
                <h3>цена</h3>
            </div>
            <div class="v-cart-heading__qty">
                <h3>количество</h3>
            </div>
            <div class="v-cart-heading__subtotal">
                <h3>сумма</h3>
            </div>
            <div class="v-cart-heading__clear">
                <h3>удалить</h3>
            </div>
        </div>
        <v-cart-item 
            v-for="(item, idx) in cart_data"
            :key="item.id"
            :cart_item_data="item"           
            @deleteFromCart="deleteFromCart(idx)"
            @decrementItemQty="decrementItemQty(idx)"
            @incrementItemQty="incrementItemQty(idx)"
        />       
        <div class="cartClearContinue">
            <button class="clearCart">clear shopping cart</button>
            <button class="continueSopping">continue shopping</button>
        </div>
        <div class="making_purchase">
			<div class="shipping_adress">
				<h3 class="shipping_adress_h3">Shipping Adress</h3>
				<form action="#">
					<select class="shipping_adress_town">
						<option selected value="Bangladesh">Bangladesh</option>
						<option value="Moscow">Moscow</option>
						</select>
						<input class="shipping_adress_state" type="text" placeholder="State">
						<input class="shipping_adress_postcode" type="text" placeholder="Postcode / Zip">
						<input class="shipping_adress_quote" type="submit" value="get a quote">
				</form>
			</div>
			<div class="coupon_discount">
				<h3 class="shipping_adress_h3">coupon discount</h3>
				<p class="coupon_discount_p">Enter your coupon code if you have one</p>
				<form action="#">
					<input class="shipping_adress_state" type="text" placeholder="State">
					<input class="coupon_discount_apply" type="submit" value="Apply coupon">
				</form>
			</div>
			<div class="grand_total">
				<div class="grand_total_sub">
					<h5 class="sub_total">Sub total</h5>
					<div class="sub_total_sum">${{ cartTotalSumm }}</div>
				</div>
				<div class="grand_total_grand">
					<h3 class="sub_total_grand">GRAND TOTAL</h3>
					<div class="grand_total_sum">${{ cartTotalSumm }}</div>
				</div>
				<form action="Checkout.html">
					<input class="grand_total_checkout" type="submit" value="proceed to checkout">
				</form>
			</div>
		</div>
        </div>	
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import {mapActions} from 'vuex'

export default {
   name: "v-cart",
   components: {
         vCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        cartTotalSumm() {       
            return this.cart_data.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DECREMENT_FROM_CART',
            'INCREMENT_FROM_CART'
        ]),
        decrementItemQty(idx) {
            this.DECREMENT_FROM_CART(idx);
        },

        incrementItemQty(idx) {
            this.INCREMENT_FROM_CART(idx);
        },

        deleteFromCart(idx) {
            this.DELETE_FROM_CART(idx);
        }
    } 
}
</script>

<style>
    .v-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .v-cart-heading {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
        width: 100%;
        border-bottom: 3px solid #f16d7f;
    }
    .cartClearContinue {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .box_visible {
        width: 100%;
    }
</style>