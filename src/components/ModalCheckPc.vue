<template>
    <div v-if="isModalChackPc" class="modal-pc">
        Проверить Ваше ПК?
        <br />
        <br />
        {{ loading ? 'loading...' : '' }}
        <br />
        <button class="button-check-pc" @click="checkPc">Проверить</button>
        <button class="button-check-pc" @click="closeChechPc">Отменить</button>
    </div>
    <div v-if="isLooking" class="modal-look">
        Поиск
        <input type="text">
        <br />
        {{ pleaseWait ? 'please wait...' : '' }}
        <br />
        <button class="button-look" @click="serchLooking">Поиск</button>
        <button class="button-look" @click="closeIsLoking">Отмена</button>
    </div>
</template>


<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ModalCheckPk',
    data() {
        return {
            loading: false,
            pleaseWait: false,
        }
    },
    computed: {
        ...mapGetters({
            isModalChackPc: 'getIsModalChackPc',
            isLooking: 'getIsLoking',
        }),
    },
    methods: {
        ...mapMutations(['closeIsModalCheckPc', 'closeloking']),
        closeChechPc() {
            this.closeIsModalCheckPc()
        },
        checkPc() {
            this.loading = true
        },
        closeIsLoking() {
            this.closeloking()
        },
        serchLooking() {
            this.pleaseWait = true
        }
    }
}
</script>

<style scored>
.modal-pc {
    position: absolute;
    left: 20px;
    top: 350px;
    color: rgb(65, 64, 64);
    background-color: rgb(189, 189, 189);
    width: 300px;
    height: 100px;
    padding: 10px;
    font-weight: 600;
}

.button-check-pc {
    margin: 10px 30px;
    border: 0;
    padding: 5px 10px;
    cursor: pointer;
}

.button-check-pc:hover {
    background: #30cc00;
}

.modal-look {
    position: absolute;
    right: 100px;
    top: 100px;
    color: rgb(65, 64, 64);
    background-color: rgb(189, 189, 189);
    width: 300px;
    height: 70px;
    padding: 20px;
    font-weight: 600;
}

.button-look {
    width: 100px;
    margin: 10px 10px;
    border: 0;
    padding: 5px 10px;
    cursor: pointer;
}

.button-look:hover {
    background: #30cc00;
}
</style>