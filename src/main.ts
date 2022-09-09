import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
//登录判断
import '@/utils/router';
import Icons from '@/icon/index';

import '@/styles/index.css';

// 创建vue实例
const app = createApp(App);

app.use(store);
app.use(router);

// 挂载实例
app.mount('#app');

// 注册全局element icon组件
Object.keys(Icons).forEach((it) => {
    app.component(it, (Icons as any)[it]);
});
