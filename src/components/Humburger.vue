<template>
    <el-icon
        class="fold-wrapper"
        :class="[userStore.isCollapse ? 'fold-close-status' : 'fold-open-status']"
        @click="toggleFold"
    >
        <Expand />
    </el-icon>
</template>

<script lang="ts" setup name="HumBurger">
    import { useUserStore } from '@/store/user';
    const userStore = useUserStore();
    const toggleFold = () => {
        userStore.updateCollapse(!userStore.isCollapse);
    };
</script>

<style lang="scss" scoped>
    .fold-open-status {
        transform: rotate(180deg);
    }
    .fold-close-status {
        transform: rotate(0);
    }
    .fold-wrapper {
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        margin: 0 10px;
        font-size: 20px;
        transition: transform $transitionTime;
    }
    .fold-wrapper:hover {
        color: $themes;
        cursor: pointer;
    }
</style>
