<template>
    <div class = "v-main-wrapper">
        <header>
			<div class="header center">
				<div class="header__left">
					<a class="logo" href="#">
						<img class="logo__img" src="https://raw.githubusercontent.com/Sergey-TR/testkraken/master/project/img/logo.png" alt="logo">BRAN<span class="logoD">D</span>
					</a>
						<div class="browse">
						<details class="browse_det">
							<summary class="browse_det_sum">Browse</summary>
								<div class="browse_drop_menu">
									<h3 class="browse__h3">Women</h3>
										<ul class="browse_ul">
											<li><a href="#" class="browse_a">Dresses</a></li>
											<li><a href="#" class="browse_a">Tops</a></li>
											<li><a href="#" class="browse_a">Sweaters/Knits</a></li>
											<li><a href="#" class="browse_a">Jackets/Coats</a></li>
											<li><a href="#" class="browse_a">Blazers</a></li>
											<li><a href="#" class="browse_a">Denim</a></li>
											<li><a href="#" class="browse_a">Leggings/Pants</a></li>
											<li><a href="#" class="browse_a">Skirts/Shorts</a></li>
											<li><a href="#" class="browse_a">Accessories</a></li>
										</ul>
									<h3 class="browse__h3">men</h3>
										<ul class="browse_ul">
											<li><a href="#" class="browse_a">Tees/Tank tops</a></li>
											<li><a href="#" class="browse_a">Shirts/Polos</a></li>
											<li><a href="#" class="browse_a">Sweaters</a></li>
											<li><a href="#" class="browse_a">Sweatshirts/Hoodies</a></li>
											<li><a href="#" class="browse_a">Blazers</a></li>
											<li><a href="#" class="browse_a">Jackets/vests</a></li>
										</ul>
								</div>
						</details>
					</div>
					<form class="header__form" action="#">
						<input class="header__form__int" type="search" placeholder="Search for Item...">
						<button class="header__form__btn" type="submit">
							<font-awesome-icon :icon="['fas', 'search']" />
						</button>
					</form>
				</div>
				<div class="header__right">
					<div class="header__right_cart">
						<div class="cart__total">
						<span class="cart__total_span">{{cartTotalQty}}</span>
							<!-- <button class="cart__total_btn"></button> -->
							<router-link :to="{name: 'cart', params: {cart_data: CART}}" custom v-slot="{ navigate }" class="menu__list">
                        		<span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link"></span>
                    		</router-link>
						</div>				
					</div>
					<div class="my_account_btn">
						<details class="my_account_det">
							<summary class="my_account_sum">My Account</summary>
							<div class="my_account_checkout">
								<div class="my_account_total">
									<div class="total">TOTAL</div>
									<div class="total500"><span class="span_total">0</span></div>
								</div>
								<button class="my_account_check">Checkout</button>
								<button class="my_account_cart">Go to cart</button> 
							</div>
						</details>
					</div>
				</div>
			</div>
		</header>
		<nav>
			<div class="nav">
				<ul class="menu center">
					<!-- <router-link to="/" class="menu__list" tag="li">
						<a href="#" class="menu__link">Home</a>
					</router-link> -->
                    <router-link to="/" custom v-slot="{ navigate }" class="menu__list">
                        <span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link">home</span>
                    </router-link>
					<!-- <li class="menu__list"><a href="#" class="menu__link">Man</a></li> -->
					<router-link to="/man" custom v-slot="{ navigate }" class="menu__list">
                        <span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link">man</span>
                    </router-link>
					<router-link to="/women" custom v-slot="{ navigate }" class="menu__list">
                        <span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link">women</span>
                    </router-link>
					<!-- <li class="menu__list"><a href="#" class="menu__link">Women</a>
					<div class="drop">
						<div class="drop_women_left">
							<h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">	
							<li><a href="#" class="drop__a">Dresses</a></li>
							<li><a href="#" class="drop__a">Tops </a></li>
							<li><a href="#" class="drop__a">Sweaters/Knits</a></li>
							<li><a href="#" class="drop__a">Jackets/Coats </a></li>
                            <li><a href="#" class="drop__a">Blazers </a></li>
                            <li><a href="#" class="drop__a">Denim </a></li>
                            <li><a href="#" class="drop__a">Leggings/Pants </a></li>
                            <li><a href="#" class="drop__a">Skirts/Shorts </a></li>
                            <li><a href="#" class="drop__a">Accessories</a></li>
                        </ul>
						</div>
						<div class="drop_women_center">
							<div class="drop_center_top">
								<h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">	
							<li><a href="#" class="drop__a">Dresses </a></li>
							<li><a href="#" class="drop__a">Tops </a></li>
							<li><a href="#" class="drop__a">Sweaters/Knits  </a></li>
							<li><a href="#" class="drop__a">Jackets/Coats </a></li>
							</ul>
							</div>
							<div class="drop_center_down">
								<h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">	
							<li><a href="#" class="drop__a">Dresses </a></li>
							<li><a href="#" class="drop__a">Tops </a></li>
							<li><a href="#" class="drop__a">Sweaters/Knits  </a></li>
                        </ul>
							</div>
						</div>
						<div class="drop_women_right">
							<div class="drop_right_top">
								<h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">	
							<li><a href="#" class="drop__a">Dresses </a></li>
							<li><a href="#" class="drop__a">Tops </a></li>
							<li><a href="#" class="drop__a">Sweaters/Knits  </a></li>
							<li><a href="#" class="drop__a">Jackets/Coats </a></li>
							</ul>
							</div>
							<div class="drop_right_img">
								<a href="#"><div class="drop_img">
									<h3 class="drop_img_h3">Super sale!</h3>
								</div></a>
							</div>
						</div>
					</div>
					</li>  -->
                	<router-link to="/catalog" custom v-slot="{ navigate }" class="menu__list">
                        <span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link">catalog</span>
                    </router-link>
                    <router-link :to="{name: 'cart', params: {cart_data: CART}}" custom v-slot="{ navigate }" class="menu__list">
                        <span @click="navigate" @keypress.enter="navigate" role="link" class="menu__link">cart</span>
                    </router-link>
					<!-- <router-link :to="{name: 'cart', params: {cart_data: CART}}" class="menu__list" tag="li">
						<a href="#" class="menu__link">Cart</a>
					</router-link> -->
					<!-- <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
					<li class="menu__list"><a href="#" class="menu__link">Hot Deals</a></li> -->
                    
				</ul>
			</div>
		</nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>        
        <!-- <v-home></v-home>
 		<v-catalog></v-catalog> 
 		<v-cart 
            v-if="CART.length"
            :cart_data="CART"
         ></v-cart>  -->
 	</div>
</template>

<script>
// import vCatalog from './v-catalog'
// import vCart from './v-cart'
// import vHome from './v-home'

import {mapGetters} from 'vuex'


export default {
    name: 'v-main-wrapper',
    // components: {
    //     vCatalog,
    //     vCart,
    //     vHome
    // },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
		...mapGetters([
          'CART'
      ]),
      cartTotalQty() {
           return this.CART.reduce((sum, item) => sum + item.quantity, 0) 
        }
	},
    methods: {},
    watch: {},
    mounted() {}
}
</script>

<style>
    .v-main-wrapper {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
</style>