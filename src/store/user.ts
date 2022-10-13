// import { defineStore } from 'pinia';
// import { shallowReactive } from 'vue';

const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
// const permissionRoutes = JSON.parse(localStorage.getItem('permissionRoutes') || '[]');

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            token: '',
            name: '花待葬',
            userInfo: userInfo,
            isCollapse: false,
            // permissionRoutes: permissionRoutes
            permissionRoutes: shallowReactive([]) as Array<any>,
            cachedView: shallowReactive([]) as Array<any>
        };
    },
    // persist: {
    //     key: 'userInfo',
    //     storage: window.localStorage,
    //     paths: ['userInfo', 'permissionRoutes']
    //     // strategies: [
    //     //     {
    //     //         storage: localStorage,
    //     //         paths: ['userInfo']
    //     //     }
    //     // ]
    // },
    getters: {
        loginStatus: (state) => {
            return !!Object.keys(state.userInfo).length;
        },
        isEmptyRoute: (state) => {
            return state.permissionRoutes.length === 0;
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
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },
        logout() {
            this.userInfo = {};
            this.updateRoutes([]);
            localStorage.clear();
        },
        updateCollapse(data: boolean) {
            this.isCollapse = data;
        },
        updateRoutes(data: Array<any>) {
            this.permissionRoutes.length = 0;
            this.permissionRoutes.push(...data);
            localStorage.setItem('permissionRoutes', JSON.stringify(data));
        }
    }
});
