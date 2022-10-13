<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item of breadcrumbs" :key="item.path">
                <span class="breadcrumb-title">{{ item.meta?.title }}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts" setup name="Breadcrumb">
    import { RouteLocationMatched } from 'vue-router';
    const breadcrumbs = shallowReactive([] as Array<RouteLocationMatched>);
    const route = useRoute();
    const generatorBreadcrumb = () => {
        breadcrumbs.length = 0;
        breadcrumbs.push(
            ...route.matched.filter((it) => {
                return it.meta && it.meta.title && it.children.length != 1;
            })
        );
    };
    watch(
        () => route.path,
        () => {
            generatorBreadcrumb();
        }
    );
    onMounted(generatorBreadcrumb);
</script>
