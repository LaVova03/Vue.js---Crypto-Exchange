<template>
    <div class="products-main">
        <ProductsCard />
    </div>
</template>

<script>

import ProductsCard from '@/components/ProductsCard'

export default {
    name: 'ProductsMain',
    components: {
        ProductsCard,
    }
}
</script>

<style scored>
.products-main {
    text-align: center;
    padding: 20px;
}
</style>