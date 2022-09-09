<template>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        active-text-color="#409eff"
        background-color="#001428"
        text-color="#bbbbbb"
        :collapse="userStore.isCollapse"
        :router="true"
        :collapse-transition="false"
    >
        <div class="logo">
            <img src="@/assets/logo.png" alt="" width="40" />
            <span v-show="!userStore.isCollapse">哈哈管理系统</span>
        </div>
        <el-menu-item index="4">
            <el-icon><HomeFilled /></el-icon>
            <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="/test">
            <template #title>
                <el-icon><Setting /></el-icon>
                <span>系统测试</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/test/element">element</el-menu-item>
                <el-menu-item index="/test/request">request</el-menu-item>
                <el-menu-item index="/test/vueUse">vueUse</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <!-- <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrap-class">
            <MenusItem :menu-data="qrcodeList"></MenusItem>
        </el-scrollbar> -->
    </el-menu>
</template>
<script lang="ts">
    import { defineComponent, onMounted, reactive } from 'vue';
    import { useUserStore } from '@/store/user';
    import { useRouter } from 'vue-router';
    import { OriginRoute } from '@/types/routes';
    export default defineComponent({
        name: 'SideBar',
        components: {},
        setup() {
            const userStore = useUserStore();
            const Router = useRouter();
            let qrcodeList = reactive([] as Array<OriginRoute>);
            qrcodeList = userStore.permissionRoutes;

            const arrFilter = (it: Array<OriginRoute>) => {
                let arr = [] as Array<OriginRoute>;
                it.forEach((item) => {
                    if (item.children) {
                        item.children = arrFilter(item.children);
                    }
                    if (!item.hidden) {
                        arr.push(item);
                    }
                });
                return arr;
            };
            qrcodeList = arrFilter(qrcodeList);
            onMounted(() => {
                console.log(userStore.permissionRoutes, 1212);
            });
            return {
                userStore,
                Router,
                qrcodeList
            };
        }
    });
</script>

<style lang="scss" scoped>
    .scrollbar {
        height: calc(100vh - $nav_height);
    }
    .logo {
        width: 100%;
        height: calc($nav_height - 1px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        box-sizing: border-box;
        background: $bg_color1;
        color: #ffffff;
        border-bottom: 1px dashed #ffffff;
        span {
            margin-left: 10px;
            width: auto;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    .el-menu-vertical {
        padding-top: $nav_height;
        box-sizing: border-box;
        border: none;
    }
</style>
