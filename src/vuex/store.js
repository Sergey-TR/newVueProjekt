import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        // SET_CART: (state, product) => {
        //     if(state.cart.length) {
        //         let isProductExists = false;
        //         state.cart.map(function(item) {
        //             if(item.id === product.id) {
        //                 isProductExists = true;
        //                 item.quantity++
        //             }
        //         })
        //         if (!isProductExists) {
        //             state.cart.push(product); 
        //         }
        //     } else {
        //         state.cart.push(product);
        //     }
            
        // },
        SET_CART: (state, product) => {
            let isProductExist = false
            state.cart.map(function (item) {
              if (item.id === product.id) {
                isProductExist = true
                item.quantity++
              }
            })
            isProductExist || state.cart.push({ ...product, quantity: 1 })
        },
        REMOVE_FROM_CART: (state, idx) => {
            state.cart.splice(idx, 1);
        },
        INCREMENT_ITEM: (state, idx) => {
            state.cart[idx].quantity++;
        },
        DECREMENT_ITEM: (state, idx) => {
            if (state.cart[idx].quantity > 1) {
                state.cart[idx].quantity--
            }
        }
    },
    actions: {
        // json-server --watch db.json
        GET_PRODUCTS_FROM_API({commit}) {
            return Axios('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        INCREMENT_FROM_CART({commit}, idx) {
            commit('INCREMENT_ITEM', idx);
        },
        DECREMENT_FROM_CART({commit}, idx) {
            commit('DECREMENT_ITEM', idx);
        },
        DELETE_FROM_CART({commit}, idx) {
            commit('REMOVE_FROM_CART', idx);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;