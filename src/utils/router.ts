import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router, { routes as constantRoutes, NOT_FOUND_ROUTE } from '@/router';
import { adminRoutes } from '@/router/accessRoutes';
import { RouteRecordRawWithHidden, OriginRoute } from '@/types/routes';
import { RouteRecordRaw } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import store from '@/store';
import { useUserStore } from '@/store/user';

const userStore = useUserStore(store);

NProgress.configure({
    showSpinner: false
});

function getComponent(it: OriginRoute) {
    const name = it.path == '/' ? '/index' : it.path;
    return (): any => import(`../pages${name}.vue`);
}

function isMenu(path: string, it: OriginRoute) {
    const result = path.match('/');
    const count = !result ? 0 : result.length;
    return count == 1 && it.children;
}

function generatorRoutes(res: Array<OriginRoute>) {
    const tempRoutes: Array<RouteRecordRawWithHidden> = [];
    res.forEach((it) => {
        const route: RouteRecordRawWithHidden = {
            path: it.path,
            name: it.name,
            hidden: !!it.hidden,
            component: isMenu(it.path, it) ? AppLayout : getComponent(it),
            meta: {
                title: it.meta.title,
                keepAlive: !!it.meta.keepAlive,
                requireAuth: !!it.meta.requireAuth
            },
            icon: it.icon,
            children: []
        };
        if (it.children) {
            route.children = generatorRoutes(it.children);
        }
        tempRoutes.push(route);
    });
    return tempRoutes;
}

const whiteRoutes: string[] = ['/login'];

router.beforeEach(async (to) => {
    NProgress.start();
    if (whiteRoutes.includes(to.path)) {
        NProgress.done();
        return true;
    } else {
        // console.log(userStore.loginStatus, userStore.isEmptyRoute, to, 777);
        if (!userStore.loginStatus) {
            NProgress.done();
            return {
                path: '/login',
                query: { redirect: to.fullPath }
            };
        } else {
            if (userStore.isEmptyRoute) {
                // 加载路由
                const accessRoutes: Array<RouteRecordRaw> = [];
                const tempRoutes = generatorRoutes(adminRoutes);
                accessRoutes.push(...tempRoutes, NOT_FOUND_ROUTE);
                accessRoutes.forEach((it: any) => {
                    router.addRoute(it);
                });
                userStore.updateRoutes([...constantRoutes, ...accessRoutes]);
                return { ...to, replace: true };
            } else {
                return true;
            }
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});
