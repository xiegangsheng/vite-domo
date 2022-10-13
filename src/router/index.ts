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
        path: window.location.pathname,
        name: 'Default',
        meta: {
            title: 'default',
            keepAlive: false,
            requireAuth: false
        },
        hidden: true,
        component: () => import('@/pages/defaultRoute.vue')
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
            keepAlive: false,
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
                    keepAlive: false,
                    requireAuth: true
                },
                component: () => import('@/pages/index.vue'),
                hidden: false,
                icon: 'HomeFilled'
            }
        ]
    }
];

export const NOT_FOUND_ROUTE = {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true
};

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
