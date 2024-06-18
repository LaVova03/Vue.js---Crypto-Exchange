<template>
    <div class="page_four">
        <h1>CRYPTO</h1>
        <InputMain :changeAmount="changeAmount" :convert="convert" :favourite="favourite" />
        <div>
            <SelectorMain :setCrypto="setcryptoFirst" :cryptoNow="cryptoFirst" />
            <SelectorMain :setCrypto="setCryptoSecond" :cryptoNow="cryptoSecond" />
        </div>
        <p v-if="error !== ''">{{ error }}</p>
        <p v-if="result !== 0">{{ `${result} ${cryptoSecond}` }}</p>
        <FavoriteValue :favs="favs" v-if="favs.length > 0" :getFromFavs="getFromFavs" />
    </div>
</template>

<script>

import CryptoConvert from 'crypto-convert';
import InputMain from '@/components/InputMain';
import SelectorMain from '@/components/SelectorMain';
import FavoriteValue from '@/components/FavoriteValue';

const convert = new CryptoConvert();

export default {
    name: 'PageFour',
    components: {
        InputMain,
        SelectorMain,
        FavoriteValue
    },
    data() {
        return {
            amount: 0,
            cryptoFirst: '',
            cryptoSecond: '',
            error: '',
            result: 0,
            favs: [],
        }
    },
    methods: {
        getFromFavs(i) {
            this.cryptoFirst = this.favs[i].from
            this.cryptoSecond = this.favs[i].to
        },
        favourite() {
            if (this.cryptoFirst && this.cryptoSecond) {
                this.favs.push({
                    from: this.cryptoFirst,
                    to: this.cryptoSecond
                })
            }
        },
        changeAmount(val) {
            this.amount = val
        },
        setcryptoFirst(val) {
            this.cryptoFirst = val
        },
        setCryptoSecond(val) {
            this.cryptoSecond = val;
            this.result = 0;
        },
        async convert() {
            if (this.amount <= 0) {
                this.result = 0;
                this.error = 'Введите число больше 0 !'
                return;
            } else if (this.cryptoFirst === '' || this.cryptoSecond === '') {
                this.result = 0;
                this.error = 'Выберите валюту !'
                return;
            } else if (this.cryptoFirst === this.cryptoSecond) {
                this.result = 0;
                this.error = 'Выберите разные валюты !'
                return;
            }
            this.error = '';

            await convert.ready();
            if (this.cryptoFirst === 'BTC' && this.cryptoSecond === 'ETH') {
                this.result = convert.BTC.ETH(this.amount);
            } else if (this.cryptoFirst === 'BTC' && this.cryptoSecond === 'USDT') {
                this.result = convert.BTC.USDT(this.amount);
            } else if (this.cryptoFirst === 'ETH' && this.cryptoSecond === 'BTC') {
                this.result = convert.ETH.BTC(this.amount);
            } else if (this.cryptoFirst === 'ETH' && this.cryptoSecond === 'USDT') {
                this.result = convert.ETH.USDT(this.amount);
            } else if (this.cryptoFirst === 'USDT' && this.cryptoSecond === 'BTC') {
                this.result = convert.USDT.BTC(this.amount);
            } else if (this.cryptoFirst === 'USDT' && this.cryptoSecond === 'ETH') {
                this.result = convert.USDT.ETH(this.amount);
            }

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pirata+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.page_four {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(14, 5, 5, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(140, 0, 255, 1) 100%, rgba(13, 40, 17, 1) 100%);
}

.page_four>div {
    display: flex;
}

h1 {
    font-family: "Pirata One", system-ui;
    font-weight: 400;
    font-style: normal;
    color: rgb(243, 183, 31);
    font-size: 120px;
    margin-top: 0;
    margin-bottom: 30px;
}

p {
    color: red;
    font-size: 24px;
    margin: 0;
}

p:last-child {
    font-family: "Pirata One", system-ui;
    font-weight: 400;
    font-style: normal;
    color: rgb(243, 183, 31);
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 30px;

}
</style>