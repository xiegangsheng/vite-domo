<template>
    <div class="routeView">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in" appear>
                <KeepAlive :include="cachedViews">
                    <component :is="Component" :key="routeKey" />
                </KeepAlive>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup name="MaIn">
    const route = useRoute();
    const routeKey = ref(route.fullPath);
    const router = useRouter();
    const allRoutes = router.getRoutes();

    const cachedViews = computed(() => {
        let arr = shallowReactive([]) as Array<any>;
        arr = allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name);
        return arr;
    });

    watch(
        () => route.fullPath,
        () => {
            routeKey.value = route.fullPath;
        }
    );
</script>

<style lang="scss" scoped>
    .routeView {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    /* fade-transform */
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all 0.5s;
    }

    .fade-transform-enter-from {
        opacity: 0;
        transform: translateX(-50px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }
</style>
