<template>
    <h1> 你访问的页面找不到~ </h1>
    <h1>404</h1>
    <h1>
        <router-link to="/">点击跳转至首页</router-link>
    </h1>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NotFind'
    });
</script>
