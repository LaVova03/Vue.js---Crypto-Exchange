<template>
    <div class="favs_wrap">
        <h2>Варианты избранных</h2>
        <div v-for="(el, i) in favs" :key="i" @click="getFromFavs(i)">
            <span>{{ el.from }}</span>
            <span>{{ el.to }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FavoriteValue',
    props: {
        favs: {
            type: Array,
            requied: true
        },
        getFromFavs: {
            type: Function,
            requied: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.favs_wrap {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35%;
    left: 15%;
    transform: translateX(-50%);
}

.favs_wrap>div {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    margin: 0 auto;
    width: 300px;
    transition: 300ms;
    margin-bottom: 10px;
}

.favs_wrap>div:hover {
    border-bottom: 1px solid gold;
    width: 350px;
}

.favs_wrap>div:active {
    border-bottom: 1px solid rgb(25, 211, 0);
    width: 350px;
}

span {
    text-align: center;
    color: white;
    background: #1a032d;
    width: 100px;
    padding: 5px 0;
}

h2 {
    margin: 30px auto;
    color: white;
}
</style>