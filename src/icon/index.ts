import { markRaw } from 'vue';
// 引入全部图标
// import * as Icons from "@element-plus/icons-vue"

// 按需引入图标
import { HomeFilled, Setting, Expand, Fold } from '@element-plus/icons-vue';

const Icons = markRaw({
    HomeFilled: HomeFilled,
    Setting: Setting,
    Expand: Expand,
    Fold: Fold
});

export default Icons;
