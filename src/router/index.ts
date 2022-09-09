import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

export const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        meta: {
            title: '登录',
            keepAlive: false,
            requireAuth: false
        },
        hidden: true,
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/404',
        name: 'NotFind',
        meta: {
            title: '404',
            keepAlive: false,
            requireAuth: false
        },
        hidden: true,
        component: () => import('@/pages/404.vue')
    },
    {
        path: '/',
        redirect: '/index',
        hidden: true
    },
    {
        path: '/index',
        name: 'Home',
        component: AppLayout,
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        hidden: false,
        icon: 'HomeFilled',
        children: [
            {
                path: '/index',
                name: 'IndexPage',
                meta: {
                    title: '首页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/index.vue'),
                hidden: false,
                icon: 'HomeFilled'
            }
        ]
    }
    // {
    //     path: '/index',
    //     name: 'IndexPage',
    //     meta: {
    //         title: '首页',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/index.vue')
    // },
    // {
    //     path: '/vueUse',
    //     name: 'VueUse',
    //     meta: {
    //         title: 'vueUse demo',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/vueUse.vue')
    // },
    // {
    //     path: '/request',
    //     name: 'RequestPage',
    //     meta: {
    //         title: 'request demo',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/request.vue')
    // },
    // {
    //     path: '/element',
    //     name: 'Element',
    //     meta: {
    //         title: 'element demo',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/element.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
