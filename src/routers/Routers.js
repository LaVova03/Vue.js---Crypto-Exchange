import { createRouter, createWebHistory } from 'vue-router';

import LoginMain from '@/containers/LoginMain.vue';
import ErrorPage404 from '@/containers/ErrorPage404';
import ProductsMain from '@/containers/ProductsMain.vue';
import PageTwo from '@/containers/PageTwo.vue';
import PageThree from '@/containers/PageThree.vue';
import PageFour from '@/containers/PageFour.vue';

const routes = [
    {
        path: '/',
        component: LoginMain,
        name: 'loginMain',
    },
    {
        path: '/productsMain',
        component: ProductsMain,
        name: 'productsMain',
    },
    {
        path: '/pageTwo',
        component: PageTwo,
        name: 'pageTwo',
    },
    {
        path: '/pageThree',
        component: PageThree,
        name: 'pageThree',
    },
    {
        path: '/pageFour',
        component: PageFour,
        name: 'pageFour',
    },
    {
        path: '/:catchAll(.*)',
        component: ErrorPage404,
        name: '404',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
