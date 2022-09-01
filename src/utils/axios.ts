import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { useUserStore } from '@/store/user';

const baseURL = import.meta.env.VITE_BASE_URL || '';

const service: AxiosInstance = axios.create({
    baseURL,
    timeout: 20000, // 请求超时 20s
    withCredentials: true,
    headers: {}
});

// Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // const userStore = useUserStore();
        // const token = userStore.token ? `EGG_SESS=${userStore.token}` : '';
        // config.headers = {
        //     Cookie: token
        // };
        return config;
    },
    (error: AxiosError) => {
        // console.error(`error1:`, error);
        return Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // console.log(response);
        return response;
        // do something
    },
    (error: AxiosError) => {
        // do something
        // console.log(`error2:`, error.toJSON());
        const { response } = error;
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        if (response) {
            switch (response.status) {
                case 401:
                    // 未登录，跳转到登录页面或打开蒙层
                    console.log('登录过期');
                    break;
                case 403:
                    // 接受请求但拒绝执行，例如token过期
                    break;

                case 404:
                    // 页面丢失，跳转404页面
                    break;

                default:
                    break;
            }
        }
        // 服务器未返回结果：请求已经成功发起，但没有收到响应
        else if (error.request) {
            console.error('error.request:', error.request);
        }
        // 发送请求时出了点问题，例如断网
        else {
            console.error('error.message:', error.message);
            if (window && !window.navigator.onLine) {
                // 携带callbackUrl参数跳转到断网页面或者打开提示蒙层
                return;
            }
        }
        console.error('error.config:', error.config);
        return Promise.reject(error);
    }
);

export default service;
