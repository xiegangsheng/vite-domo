<template>
    <template v-for="(menu, idx) in menuData">
        <el-sub-menu v-if="menu.children && menu.children.length > 1" :key="idx" :index="menu.path">
            <template #title>
                <el-icon v-if="menu.icon != ''"><component :is="menu.icon" /></el-icon>
                <span>{{ menu.meta ? menu.meta.title : '' }}</span>
            </template>
            <el-menu-item-group>
                <MenusItem :menu-data="menu.children"></MenusItem>
            </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :key="idx + 's'" :index="menu.path">
            <el-icon v-if="menu.icon != ''"><component :is="menu.icon" /></el-icon>
            <template #title>{{ menu.meta ? menu.meta.title : '' }}</template>
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup name="MenuItem">
    import { OriginRoute } from '@/types/routes';
    // import { defineComponent, PropType } from 'vue';
    import { PropType } from 'vue';

    defineProps({
        menuData: {
            type: Array as PropType<Array<OriginRoute>>,
            default: () => {
                return [];
            }
        }
    });
    // export default defineComponent({
    //     name: 'MenuItem',
    //     components: {},
    //     props: {
    //         menuData: {
    //             type: Array as PropType<Array<OriginRoute>>,
    //             default: () => {
    //                 return [];
    //             }
    //         }
    //     },
    //     setup(props) {
    //         return {
    //             props
    //         };
    //     }
    // });
</script>

<style lang="scss" scoped></style>
