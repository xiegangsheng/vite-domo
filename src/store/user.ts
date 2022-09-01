import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            token: '',
            name: '张三',
            userInfo: {}
        };
    },
    getters: {
        loginStatus: (state) => {
            return !!Object.keys(state.userInfo).length;
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
        updateToken(token: string) {
            this.token = token;
        },
        updateUserInfo(userInfo: Object) {
            this.userInfo = userInfo;
        }
    }
});
