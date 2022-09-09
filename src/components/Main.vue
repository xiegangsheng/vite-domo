<template>
    <div class="routeView">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in" appear>
                <!-- <keep-alive :include="cachedViews"> -->
                <component :is="Component" :key="routeKey" />
                <!-- </keep-alive> -->
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useUserStore } from '@/store/user';
    export default defineComponent({
        name: 'MaIn',
        setup() {
            const userStore = useUserStore();
            const route = useRoute();
            const routeKey = ref(route.fullPath);
            const cachedViews = computed(() => {
                return userStore.cachedView.map((it) => it);
            });
            watch(
                () => route.fullPath,
                () => {
                    routeKey.value = route.fullPath;
                }
            );
            return {
                cachedViews,
                routeKey
            };
        }
    });
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
