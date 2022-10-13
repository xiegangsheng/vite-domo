<template>
    <div class="container-page">
        <div :class="[userStore.isCollapse ? 'left-close' : 'left-aside']">
            <Sidebar />
        </div>
        <div class="container">
            <div class="header-page">
                <div class="hearNav">
                    <Humburger></Humburger>
                    <Breadcrumb></Breadcrumb>
                </div>
                <div
                    class="user-info"
                    @mouseover="userMenuShow = true"
                    @mouseleave="userMenuShow = false"
                >
                    <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                        alt="avatar"
                    />{{ userStore.userInfo?.acc }}
                    <div v-show="userMenuShow" class="user-menu">
                        <div class="user-menu-item" @click="getLogout">登出</div>
                    </div>
                </div>
            </div>
            <div class="content-page">
                <!-- <RouterView /> -->
                <Main />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="LayOut">
    import Sidebar from '@/layout/Sidebar.vue';
    import { useUserStore } from '@/store/user';
    import { ElMessage } from 'element-plus';
    import API from '@/api';

    const router = useRouter();
    const userMenuShow = ref<boolean>(false);

    const userStore = useUserStore();

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
</script>
<style lang="scss" scoped>
    .container-page {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .left-aside {
        width: 200px;
        height: 100%;
        background: $bg_color1;
        transition: all 0.3s ease;
    }
    .left-close {
        width: 65px;
        height: 100%;
        background: $bg_color1;
        transition: all 0.3s ease;
    }
    .container {
        flex: 1;
        .header-page {
            height: $nav_height;
            line-height: $nav_height;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
            .hearNav {
                display: flex;
                align-items: center;
            }
            .user-info {
                position: relative;
                display: flex;
                align-items: center;
                margin-right: 100px;
                cursor: pointer;
                padding: 0 12px;
                img {
                    margin-right: 10px;
                    width: 24px;
                }
                .user-menu {
                    width: 100%;
                    position: absolute;
                    padding: 10px 0;
                    left: 0;
                    top: 60px;
                    text-align: center;
                    font-size: 14px;
                    background: #fff;
                    border: 1px solid #e4e7ed;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    line-height: 36px;
                    .user-menu-item:hover {
                        background-color: #ecf5ff;
                        color: #66b1ff;
                    }
                }
                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }
        .content-page {
            width: 100%;
            height: calc(100% - $nav_height);
            background: $bot_color;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto;
        }
    }
</style>
