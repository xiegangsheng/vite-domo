<template>
    <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
    <div>{{ userStore.name }}</div>
</template>

<!-- <script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'UsePinia'
    });
</script> -->
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useUserStore } from '@/store/user';
    // const userStore = useUserStore();
    export default defineComponent({
        name: 'UsePinia',
        setup() {
            const userStore = useUserStore();

            return {
                userStore
            };
        }
    });
</script>
