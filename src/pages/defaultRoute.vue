<template>
    <div></div>
</template>

<script lang="ts" setup name="DefaultRoute">
    //解决路由刷新报警告No match found for location with path
    const useRou = useRouter();
    const useR = useRoute();
    onMounted(() => {
        useRou.removeRoute('Default');
        useRou.replace(useR.fullPath);
    });
</script>
