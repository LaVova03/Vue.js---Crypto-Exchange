<template>
    <ul>
        <li @click="setCrypto('BTC')" :class="cryptoNow === 'BTC' ? 'active' : ''">Bitcoin</li>
        <li @click="setCrypto('ETH')" :class="cryptoNow === 'ETH' ? 'active' : ''">ETH</li>
        <li @click="setCrypto('USDT')" :class="cryptoNow === 'USDT' ? 'active' : ''">USDT</li>
    </ul>
</template>

<script>
export default {
    name: 'SelectorMain',
    props: {
        setCrypto: {
            type: Function,
            required: true
        },
        cryptoNow: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>
ul {
    margin: 30px 10px;
    justify-content: center;
    padding: 0;
    width: 200px;
    border-radius: 3px;
    border: 3px solid black;
}

li {
    display: flex;
    justify-content: center;
    list-style: none;
    background-color: #1A032D;
    color: #fff;
    padding: 20px 0;
}

li:hover,
li.active {
    background: #23043e;
    cursor: pointer;
}
</style>