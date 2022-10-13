export const adminRoutes = [
    {
        path: '/test',
        name: 'Test',
        meta: {
            title: '系统测试',
            keepAlive: false,
            requireAuth: true
        },
        hidden: false,
        icon: 'Setting',
        children: [
            {
                path: '/test/vueUse',
                name: 'VueUse',
                meta: {
                    title: 'vueUse demo',
                    keepAlive: false, //是否开启缓存
                    requireAuth: true //是否需要授权
                },
                hidden: false, //是否在左侧菜单展示
                icon: '' //图标
            },
            {
                path: '/test/element',
                name: 'Element',
                meta: {
                    title: 'element demo',
                    keepAlive: false,
                    requireAuth: true
                },
                hidden: false,
                icon: ''
            },
            {
                path: '/test/request',
                name: 'Request',
                meta: {
                    title: 'request demo',
                    keepAlive: false,
                    requireAuth: true
                },
                hidden: true,
                icon: ''
            },
            {
                path: '/test/cache',
                name: 'Cache',
                meta: {
                    title: '缓存页面',
                    keepAlive: true,
                    requireAuth: true
                },
                hidden: false,
                icon: ''
            }
        ]
    }
];
