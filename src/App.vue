<template>
    <RouterView />
</template>

<style lang="scss">
    /* 当在axios.ts里直接使用ElLoading时页面会报错，需手动引入，但这样做会导致loading样式丢失，所以在这里直接引入element-plus全部样式 */
    @import url(element-plus/dist/index.css);
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
