<template>
    <svg class="lh-iconfont" :style="style" aria-hidden="true">
        <use :xlink:href="name" />
    </svg>
</template>

<script lang="ts">
    import { defineComponent, computed } from 'vue';
    export default defineComponent({
        name: 'IconFont',
        props: {
            name: {
                type: String,
                default: '#icon-video-stop'
            }, // icon 名称
            fontSize: {
                type: String,
                default: '12px'
            }, // icon 字体大小
            width: {
                type: String,
                default: '1em'
            }, // icon 宽度
            height: {
                type: String,
                default: '1em'
            }, // icon 高度
            color: {
                type: String,
                default: ''
            } //改色
        },
        setup(props) {
            const style = computed(() => {
                return {
                    'font-size': props.fontSize,
                    width: props.width,
                    height: props.height,
                    fill: props.color ? props.color : 'currentColor'
                };
            });

            return {
                style
            };
        }
    });
</script>

<style scoped lang="scss">
    /* @import url(); 引入css类 */
    .lh-iconfont {
        width: 1em;
        height: 1em;
        /* 图标和文字相邻时，垂直对齐 */
        // vertical-align: -0.15em;
        /* 通过设置 color 来改变 SVG 的颜色/fill */
        fill: currentColor;
        /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
        normalize.css 中也包含这行 */
        overflow: hidden;
    }
</style>
