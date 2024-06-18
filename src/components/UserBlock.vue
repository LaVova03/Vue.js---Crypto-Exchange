<template>
    <div class="user">
        <ul>
            <li>{{ user.firstName }}</li>
            <li>{{ user.lastName }}</li>
            <li>{{ user.email }}</li>
            <button @click="deleteUser(i)">delete</button>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'UserBlock',
    props: {
        user: {
            type: Object,
            required: true
        },
        i: {
            type: Number,
            required: true
        },
        deleteUser: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
.user {
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 250px;
    height: max-content;
    border: 1px solid green;
    box-shadow: 2px 2px 2px greenyellow;
    border-radius: 10px;
    margin: 30px;
}

.user ul {
    padding: 0;
}

.user ul li {
    font-size: medium;
    color: blueviolet;
}

.user button {
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

.user button:hover {
    background-color: salmon;
}
</style>
