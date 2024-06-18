<template>
    <div class="login-card">
        <form action="" type="submit" class="login-form">
            <input v-model="firstName" type="text" placeholder="First Name" /><br />
            <input v-model="lastName" type="text" placeholder="Last name" /><br />
            <button type="button" @click="setForm">Login in</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'LoginCard',
    data() {
        return {
            firstName: '',
            lastName: '',
            token: 'dg213f1b56d1bd',
        }
    },
    methods: {
        setForm() {
            if (this.firstName.length >= 5 && this.lastName.length >= 5) {
                localStorage.setItem('token', this.token);
                this.$router.push({ name: 'productsMain' })
                this.firstName = '';
                this.lastName = '';
            }else{
                alert("Заполните поля")
            }
        }
    },
}
</script>

<style scoped>
body {
    margin: 0;
}

.login-card {
    margin: 0;
    padding: 0;
}

.login-form {
    text-align: center;
    margin-top: 150px;
}

.login-form>input {
    outline: none;
    width: 250px;
    margin: 10px;
    height: 25px;
    cursor: pointer;
    font-size: 15px;
}

.login-form>button {
    width: 150px;
    height: 35px;
    margin: 10px;
    font-size: 15px;
    background-color: #2290ff;
    color: white;
    border: 0;
    font-weight: 700;
    cursor: pointer;
    transition: 300ms;
}

.login-form>button:hover {
    background-color: #30cc00;
}
</style>
