<template>
    <div class="index-page">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <br />
        <UsePinia />
        <br />
        <h1>hahahh</h1>
        <iconfont name="#icon-WeChat" font-size="22px"></iconfont>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    // import UsePinia from '@/components/UsePinia.vue';

    export default defineComponent({
        name: 'IndexPage'
        // components: {
        //     UsePinia
        // }
    });
</script>
