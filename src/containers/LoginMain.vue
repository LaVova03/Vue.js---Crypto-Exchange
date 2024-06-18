<template>
    <div id="login">
        <LoginCard />
    </div>
</template>

<script>

import LoginCard from '@/components/LoginCard';

export default {
    name: 'LoginMain',
    components: {
        LoginCard
    }
}
</script>

<style scored>
#login {
    padding: 20px;
    margin: 0;
    background: rgb(63, 94, 251);
    background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(88, 19, 61, 1) 100%);
    height: 603px;
}
</style>