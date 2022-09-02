import { RouteRecordRaw } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const accessRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'IndexPage',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'IndexPage',
                meta: {
                    title: '首页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/index.vue')
            }
        ]
    },
    {
        path: '/test',
        name: 'Test',
        meta: {
            title: '系统测试',
            keepAlive: true,
            requireAuth: true
        },
        component: AppLayout,
        children: [
            {
                path: '/test/vueUse',
                name: 'VueUse',
                meta: {
                    title: 'vueUse demo',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/vueUse.vue')
            },
            {
                path: '/test/element',
                name: 'Element',
                meta: {
                    title: 'element demo',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/element.vue')
            }
        ]
    }
];

export default accessRoutes;
