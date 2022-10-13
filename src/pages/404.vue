<template>
    <div class="404page">
        <el-empty :image="img" :image-size="500" description="你访问的页面找不到~">
            <el-button type="primary" @click="push('/')">返回首页</el-button>
        </el-empty>
    </div>
</template>

<script lang="ts" setup name="NotFind">
    import { getAssetsFile } from '@/utils/index';
    const img = getAssetsFile('404.webp');
    const { push } = useRouter();
</script>
