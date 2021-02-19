<template>
    <div class="v-popup">
        <font-awesome-icon class="closePopupWindow"
        @click="closePopup"
        :icon="['fas', 'times']" />
        <div class="v-popup-box">
            <!-- <div class="v-popup__header">
                <div class="v-popup__header_title">
                    <p>Наименование:</p>
                </div>
                <div class="v-popup__header_navinfo">
                    <p>код товара:</p>
                    <p>отзывы</p>
                    <p>в избранное</p>
                    <p>сравнить</p>
                </div>
            </div> -->
            <div class="v-popup__main">
            <!-- <div class="v-popup__main_img"></div> 
            <div class="v-popup__main_info">
                <p>description</p>
                <p>price</p> -->
                <slot></slot>
            </div>
            <!-- <div class="v-popup__footer">
                <button>add to cart</button>
                <button @click="closePopup">close</button>
            </div> -->
        </div>    
    </div>
   
</template>

<script>
export default {
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    }
}

</script>

<style>
    .v-popup {
        background: rgba(64,64,64, .7);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .v-popup-box {
        display: flex;
        flex-direction: column;
        background: gainsboro;
    }
    /* .v-popup__header {
        margin-top: 100px;
    } */
    .closePopupWindow {
        position: absolute;
        top: 50px;
        right: 50px;
        color: white;
        cursor: pointer;
    }
</style>