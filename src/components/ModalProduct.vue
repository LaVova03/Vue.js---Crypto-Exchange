<template>
    <div class="">
        <div v-if="isModal" class="modal-product">
            <img class="modal-img" :src='message.img' alt="logo">
            <h2>{{ message.name }}</h2>
            {{ message.description }}
            <div class="buttons-modal">
                <button class="buton-modal-style" type="button"
                    @click="setBasket({ name: message.name, price: message.price })">Add Basket</button>
                <button class="buton-modal-style" type="button" @click="closeModal">Close Modal</button>
            </div>
        </div>
        <div v-if="isModalBasket" class="modal-basket">
            <div id="header">
                <slot name="header"></slot>
            </div>
            <div id="body">
                <slot name="body"></slot>
            </div>
            <div id="bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ModalProduct',
    props: {
        message: Object,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            isModal: 'getIsModal',
            basket: 'getBasket',
            isModalBasket: 'getIsModalBasket',
        }),
    },
    methods: {
        ...mapMutations(['closeIsModal', 'addBasket']),
        closeModal() {
            this.closeIsModal()
        },
        setBasket(payload) {
            this.addBasket(payload)
            this.closeModal()
        },
    },

}
</script>

<style scored>
.modal-product {
    position: absolute;
    margin: 0 auto;
    top: 400px;
    left: 33%;
    border: 0;
    width: 400px;
    height: 400px;
    background: rgb(182, 181, 181);
    padding: 20px;
}

.modal-img {
    width: inherit;
    height: 230px;
}

.buttons-modal {
    position: relative;
    bottom: -15px;
}

.buton-modal-style {
    border: 0;
    margin: 0 50px;
    height: 25px;
    width: 100px;
    cursor: pointer;
    font-weight: 600;
}

.buton-modal-style:hover {
    background: #30cc00;
}

.modal-basket {
    position: absolute;
    margin: 0 auto;
    top: 150px;
    left: 33%;
    border: 0;
    width: 400px;
    height: 300px;
    background: rgb(182, 181, 181);
    padding: 20px;
}

li {
    list-style: none;
}

#body {
    text-align: left;
}

.price-item-basket {
    margin-left: 100px;
}

.grid-basket {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
</style>