<template>
    <div class="page_two_wrap">
        <header>
            <nav>
                <ul>
                    <li><button>Menu</button></li>
                    <li><button>Prices</button></li>
                    <li><button>Questions</button></li>
                    <li><button>About Us</button></li>
                    <li><button>Continue</button></li>
                    <li><button>Back</button></li>
                </ul>
            </nav>
        </header>
        <main>
            <form @submit.prevent="setSubmit">
                <input type="text" placeholder="First Name" v-model="data.firstName" />
                <input type="text" placeholder="Last Name" v-model="data.lastName" />
                <input type="text" placeholder="Email" v-model="data.email" />
                <button type="submit">Summit</button>
            </form>
            <div class="users" v-if="arr.length === 0">
                <ul>
                    <li> На данный момент пользователи отсутствуют...</li>
                </ul>
            </div>
            <div class="users" v-else-if="arr.length === 1">
                <ul>
                    <li> На данный момент 1 пользователь</li>
                </ul>
            </div>
            <div class="user-block">
                <UserBlock v-for="(user, i) in arr" :key="i" :user="user" :i="i" :deleteUser="deleteUser" />
            </div>
            <p class="error">{{ this.error }}</p>
        </main>
        <button @click="openPage">На третью страницу</button>
    </div>
</template>

<script>

import UserBlock from '@/components/UserBlock';

export default {
    name: 'PageTwo',
    components: {
        UserBlock,
    },
    data() {
        return {
            arr: [],
            data: {
                firstName: '',
                lastName: '',
                email: '',
            },
            error: '',
        }
    },
    methods: {
        setSubmit() {
            if (this.data.firstName.length === 0) {
                this.error = 'First Name is required';
            } else if (this.data.lastName.length === 0) {
                this.error = 'Last Name is required';
            } else if (this.data.email.length === 0) {
                this.error = 'Email is required';
            } else {
                this.error = '';
                // Add a copy of the data to the array
                this.arr.push({ ...this.data });
                // Clear the form
                this.data.firstName = '';
                this.data.lastName = '';
                this.data.email = '';
            }
        },
        deleteUser(i) {
            this.arr.splice(i, 1);
        },
        openPage() {
            this.$router.push({ name: 'pageThree' });
        },
    }
}

</script>

<style scoped>
.page_two_wrap {
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    background-color: aliceblue;
    height: max-content;
}

div header nav ul {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
}

div header nav ul li button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    height: 50px;
    width: 150px;
    font-size: medium;
    font-weight: 600;
    color: cadetblue;
    background-color: wheat;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    transition: 200ms;
    cursor: pointer;
    -webkit-transition: 200ms;
    -moz-transition: 200ms;
    -ms-transition: 200ms;
    -o-transition: 200ms;
}

div header nav ul li button:hover {
    box-shadow: 5px 5px 5px salmon;
}

main form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: max-content;
    padding: 30px;
    height: max-content;
    background-color: cadetblue;
    margin-top: 50px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

main form input {
    width: 30vw;
    height: 30px;
    outline: none;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    padding: 0 5px;
}

.page_two_wrap button:last-child,
main form button {
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

.page_two_wrap button:last-child:hover,
main form button:hover {
    background-color: salmon;
}

.error {
    color: red;
}

.users {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
}

.users ul {
    padding: 20px;
    width: 250px;
    height: max-content;
    border: 1px solid green;
    box-shadow: 2px 2px 2px greenyellow;
    border-radius: 10px;
    margin: 30px;
}

.users ul li {
    font-size: medium;
    color: blueviolet;
}

.user-block {
    display: flex;
    justify-content: center;
}
</style>