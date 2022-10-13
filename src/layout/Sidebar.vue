<template>
    <div class="leftbar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="" width="40" />
            <span v-show="!userStore.isCollapse">哈哈管理系统</span>
        </div>
        <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrap-class">
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
                <MenusItem :menu-data="qrcodeList"></MenusItem>
            </el-menu>
        </el-scrollbar>
    </div>
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
                // console.log(userStore.permissionRoutes, 1212);
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
    .leftbar {
        height: 100%;
        .scrollbar {
            height: calc(100% - $nav_height);
        }
        .logo {
            width: 100%;
            height: calc($nav_height - 1px);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 18px;
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
            box-sizing: border-box;
            border: none;
        }
    }
</style>
