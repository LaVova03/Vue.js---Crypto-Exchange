<template>
    <input type="number" min="0" @input="changeAmount($event.target.value)" placeholder="Введите значение" />
    <div>
        <button @click="convert">Конвертировать</button>
        <button @click="favourite">В избранное</button>
    </div>
</template>

<script>
export default {
    name: 'InputMain',
    props: {
        changeAmount: {
            type: Function,
            required: true
        },
        convert: {
            type: Function,
            required: true
        },
        favourite: {
            type: Function,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
input {
    border-radius: 3px;
    border: 0;
    width: 410px;
    outline: none;
    height: 30px;
    padding: 0 10px;
    background-color: #fafafa;
    color: #333;
    font-size: 16px;
}

button {
    padding: 15px 0;
    width: 15vw;
    margin: 30px 10px 0;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background: #1a032d;
    border: 0;
    border-radius: 3px;
    transition: 200ms;
}

button:hover {
    box-shadow: 5px 5px 5px gold;
}

button:active {
    background: #24a504;
}

div {
    display: flex;
}
</style>