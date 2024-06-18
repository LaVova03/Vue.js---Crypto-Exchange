<template>
    <div class="products-card">
        <div class="products-card-header">
            <ul class="card-header-left">
                <li class="li-left" id="microsoft"><img class="img-products-microsoft" src="../assets/microsoft.png"
                        alt="logo"></li>
                <li class="li-left">Microsoft 365</li>
                <li class="li-left">Office</li>
                <li class="li-left">Windows</li>
                <li class="li-left">Xbox</li>
                <li class="li-left">Поддержка</li>
                <li class="li-left">
                    <button @click="openPage">На вторую страницу</button> <!-- исправлено здесь -->
                </li>
            </ul>
            <ul class="card-header-right">
                <li class="li-right">
                    <select id="select" name="car">
                        <option value="">Продукты Microsoft</option>
                        <option value="1">Xbox Series X</option>
                        <option value="2">Microsoft Edge</option>
                        <option value="3">Microsoft OneDrive</option>
                        <option value="4">OneNote</option>
                    </select>
                </li>
                <li class="li-right"><img class="img-products-look" src="../assets/look.png" alt="logo">
                    <button class="button-header" @click="setLook">Поиск</button>
                </li>
                <li class="li-right"><img class="img-products-basket" src="../assets/basket.png" alt="logo">
                    <button class="button-header" @click="showBasket">Корзина</button>
                </li>
                <li class="li-right"><img class="img-products-person" src="../assets/person.png" alt="logo">
                    <button class="button-header" @click="resetLocalStorage">Выйти</button>
                </li>
            </ul>
        </div>
        <div class="products-body">
            <h1 class="text-body">Разработано для жизни - <br />сегодня и в будущем</h1>
            <h3 class="text-body">Следующее поколение игр. Ваши цели. Друзья и семья. С Windows 11 вы <br />
                станете еще ближе к тому, что успели полюбить.</h3>
            <button class="check-pk" @click="checkPc">Проверьте, готов ли Ваш ПК ></button>
        </div>
        <div class="bottom-grid">
            <div class="grid-card" v-for="item in microsoft" :key="item" @click="setModal(item)">
                <img class="item-img" :src='item.img' alt="logo">
                <div class="grid-card-header">{{ item.name }}</div>
                <div class="grid-card-description">{{ item.description }}</div>
            </div>
        </div>
        <div class="basket-modal" v-if="$store.state.isModal || $store.state.isModalBasket">
            <ModalProduct :message="products">
                <template v-slot:header>
                    <h2>Ваша корзина продуктов</h2>
                </template>
                <template v-slot:body>
                    <ul>
                        <li v-for="i in basket" :key="i">
                            <div class="grid-basket">
                                <div class="name-item-basket"> {{ i.name }}</div>
                                <div class="price-item-basket"> : {{ i.price }}$
                                    <button class="img-button-delete" @click="delerePosition(i)"> <img class="img-dry"
                                            src="../assets/dry.png" alt="logo"></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-slot:bottom>
                    <div class="grid-sum">
                        <div> Сумма к оплате</div>
                        <div class="sum-price"> :{{ checkSum() }}$</div>
                    </div>
                    <button class="order-product" @click="setOrder">Заказать</button>
                    <button class="close-modal-basket" @click="closeBasket">Закрыть</button>
                </template>
            </ModalProduct>
        </div>
        <div class="pc-modal" v-if="$store.state.isModalChackPc || $store.state.isLooking">
            <ModalCheckPk />
        </div>
    </div>
</template>

<script>
import ModalProduct from './ModalProduct.vue';
import ModalCheckPk from './ModalCheckPc.vue';
import mixins from '../mixins/mixins';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ProductsCard',
    components: {
        ModalProduct,
        ModalCheckPk,
    },
    mixins: [mixins],
    data() {
        return {
            selectedCar: null,
            showDefaultOption: true,
            products: null,
        }
    },
    computed: {
        ...mapGetters({
            isModal: 'getIsModal',
            basket: 'getBasket',
            isModalBasket: 'getIsModalBasket',
            isModalChackPc: 'getIsModalChackPc',
            isLooking: 'getIsLoking',
        }),
    },
    methods: {
        openPage() {
            this.$router.push({ name: 'pageTwo' });
        },
        removeDefaultOption() {
            this.showDefaultOption = false;
        },
        resetLocalStorage() {
            localStorage.clear();
            const token = localStorage.getItem('dg213f1b56d1bd');
            if (token) {
                console.log('Токен существует:', token);
            } else {
                this.$router.push({ name: 'loginMain' });
            }
        },
        ...mapMutations(['setIsModal', 'setIsModalBasket', 'closeIsModal', 'closeIsModalBasket', 'deleteBasket',
            'cleanBasket', 'setIsModalChackPc', 'setIsLoking']),
        setModal(item) {
            this.products = item;
            this.setIsModal();
            this.closeIsModalBasket();
        },
        showBasket() {
            this.setIsModalBasket();
            this.closeIsModal();
        },
        closeBasket() {
            this.closeIsModalBasket();
        },
        setOrder() {
            this.cleanBasket();
            this.closeIsModalBasket();
        },
        checkSum() {
            let sum = 0;
            for (let key in this.basket) {
                sum += this.basket[key].price;
            }
            return sum;
        },
        delerePosition(i) {
            this.deleteBasket(i);
        },
        checkPc() {
            this.setIsModalChackPc();
            console.log(this.getIsModalChackPc);
        },
        setLook() {
            this.setIsLoking();
        },
    }
};
</script>

<style scoped>
.products-card-header {
    justify-content: space-between;
    display: flex;
    font-size: 17px;
}

button:hover {
    transition: 0.2s;
    font-size: 20px;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
}

.card-header-right {
    margin-right: 20px;
}

.img-products-microsoft {
    width: 130px;
    top: 25px;
    left: 20px;
}

#microsoft {
    margin: -10px;
}

.img-products-look {
    position: absolute;
    width: 25px;
    top: 43px;
    right: 225px;
}

.img-products-basket {
    position: absolute;
    width: 60px;
    top: 36px;
    right: 110px;
}

.img-products-person {
    position: absolute;
    width: 25px;
    top: 40px;
    right: 40px;
}

.card-header-left,
.card-header-right {
    display: flex;
}

.card-header-left {
    padding: 0;
    margin: 20px 10px 10px -10px;
}

.li-left {
    position: relative;
    list-style-type: none;
    margin: 9px 10px;
}

.li-right {
    width: inherit;
    list-style-type: none;
    margin: 9px 20px 9px 10px;
}

#select {
    border: 0;
    font-size: 15px;
    cursor: pointer;
}

#select:hover {
    font-size: 20px;
    transition: 0.2s;
}

.button-header {
    border: 0;
    background-color: inherit;
    cursor: pointer;
    font-size: 15px;
}

.products-body {
    width: -webkit-fill-available;
    height: 46em;
    background-image: url('../assets/comp.jpg');
    background-size: cover;
    color: #ffffff;
}

.text-body {
    color: black;
    text-align: left;
    opacity: 0.6;
}

.check-pk {
    position: absolute;
    left: 20px;
    border: 0;
    background: grey;
    color: white;
    padding: 10px;
    cursor: pointer;
}

.check-pk:hover {
    background: #30cc00;
}

.bottom-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.grid-sum {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-bottom: 10px;
    margin-left: -4px;
    font-weight: 600;
}

.item-img {
    margin-top: 20px;
    width: 300px;
    height: 170px;
}

.item-img:hover {
    width: 350px;
    height: 200px;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
}

.grid-card-header {
    text-align: left;
    margin: 10px;
    font-size: 20px;
    font-weight: 700;
    opacity: 0.8;
}

.grid-card-description {
    text-align: left;
    margin: 10px;
    font-size: 15px;
    opacity: 0.8;
}

.sum-price {
    margin: 0 -91px 0 0;
}

.img-dry {
    width: 40px;
}

.img-dry:hover {
    width: 45px;
}

.img-button-delete {
    margin: 0 0 0 4px;
    position: relative;
    left: 45px;
    top: -22px;
    border: 0;
    width: 31px;
    background: rgb(182, 181, 181);
    padding: 0;
    cursor: pointer;
}


.order-product,
.close-modal-basket {
    padding: 5px 15px;
    margin: 0 30px;
    border: 0;
}


.order-product:hover,
.close-modal-basket:hover {
    background: #30cc00;
}
</style>