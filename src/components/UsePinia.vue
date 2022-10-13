<template>
    <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
    <br />
    <div>{{ userStore.name }}</div>
    <h4>Pinia解构方法：storeToRefs</h4>
    <div>{{ name }}</div>
    <el-button type="primary" @click="update">更改Pinia里的name</el-button>
</template>

<script lang="ts" setup name="UsePinia">
    import { useUserStore } from '@/store/user';
    const userStore = useUserStore();
    const { name } = storeToRefs(userStore);
    const update = () => {
        userStore.updateName('张三');
    };
</script>
