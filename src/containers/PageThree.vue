<template>
    <div class="page_three_wrap">
        <div>
            <h1>Погодное приложение</h1>
            <p>Узнать погоду в: {{ !city ? "вашем городе" : cityName }}</p>
            <input type="text" v-model="city" placeholder="Введите город" />
            <button @click="getweather" :disabled="!city">Увидеть результат</button>
            <ul v-show="data.length > 0">
                <li v-for="(el, i) in data" :key="i">
                    <p>{{ el.i }} {{ el.title }}</p>
                    <p>{{ el.description }}</p>
                    <p>{{ el.date }}</p>
                </li>
            </ul>
            <p>{{ error }}</p>
        </div>
        <button @click="openPage">На третью страницу</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'PageThree',
    data() {
        return {
            city: "",
            error: '',
            data: [],
        }
    },
    methods: {
        async getweather() {
            if (this.city.trim().length < 2) {
                this.error = "Введите полное название"
                return false
            }
            this.error = '';
            try {
                const response = await axios.get('https://64980a639543ce0f49e198cf.mockapi.io/Products');
                if (response.status === 200) {
                    this.data.push(...response.data)
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.error = 'Invalid API key. Please check your API key.';
                } else {
                    this.error = 'An error occurred. Please try again later.';
                }
                console.error('Error:', error);
            } finally {
                console.log(this.data);
            }
        },
        openPage() {
            this.$router.push({ name: 'pageFour' });
        },
    },
    computed: {
        cityName() {
            return '"' + this.city + '"'
        }
    }
}
</script>

<style scoped>
.page_three_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(14, 5, 5, 1) 0%, rgba(255, 239, 0, 1) 0%, rgba(140, 0, 255, 1) 100%, rgba(13, 40, 17, 1) 100%);
}

.page_three_wrap div:first-child {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 900px;
    height: 500px;
    border-radius: 50px;
    background-color: #076000;
    padding: 20px;
}

.page_three_wrap div h1 {
    width: max-content;
    margin: 50px auto 0;
    color: white;
    font-weight: 600;
}

.page_three_wrap div p {
    width: max-content;
    margin: 20px auto 0;
    color: white;
    font-weight: 600;
}

.page_three_wrap div input {
    margin: 30px auto 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #adadad;
    color: white;
    outline: none;
    font-size: 18px;
    transition: 300ms;
}

.page_three_wrap div input:focus {
    border-bottom: 1px solid #ffffff;
}

.page_three_wrap div input::placeholder {
    color: white;
}

.page_three_wrap div button {
    width: 200px;
    padding: 12px;
    margin: 20px auto 0;
    color: white;
    font-weight: 600;
    font-size: 18px;
    color: rgb(114, 114, 114);
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms;
}

.page_three_wrap div button:hover {
    background-color: #acacac;
}

.page_three_wrap div button:active {
    color: #ffffff;
}

.page_three_wrap div p:last-child {
    color: #e60000;
}

.page_three_wrap>button {
    width: 150px;
    height: 35px;
    margin: 10px auto 0;
    border: 1px solid gray;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    background-color: wheat;
    cursor: pointer;
    transition: 200ms;
    -webkit-transition: 200ms;
    -moz-transition: 200ms;
    -ms-transition: 200ms;
    -o-transition: 200ms;
}

.page_three_wrap>button:hover {
    background-color: salmon;
}
</style>