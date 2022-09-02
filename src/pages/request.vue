<template>
    <h2> 这里是request请求页面 </h2>
    <br />
    <el-button v-if="userStore.loginStatus" type="primary" @click="getLogout">退出登录</el-button>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useUserStore } from '@/store/user';
    import { ElMessage } from 'element-plus';
    import { useRouter } from 'vue-router';
    import API from '@/api';
    export default defineComponent({
        name: 'RequestPage',
        setup() {
            const userStore = useUserStore();
            const router = useRouter();
            const getLogout = async () => {
                let { data } = await API.logout();
                if (data.code != 200) return;
                ElMessage({
                    message: '退出成功！',
                    type: 'success'
                });
                userStore.logout();
                router.push('/login');
            };
            return {
                userStore,
                getLogout
            };
        }
    });
</script>
