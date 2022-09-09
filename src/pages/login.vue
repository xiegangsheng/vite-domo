<template>
    <div class="loginBox">
        <div class="content">
            <h2> 这里是登录页面 </h2>
            <br />
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="120px"
                class="demo-ruleForm"
                size="large"
                status-icon
            >
                <el-form-item label="账号" prop="account">
                    <el-input v-model="ruleForm.account" />
                </el-form-item>
                <el-form-item label="密码" prop="psw">
                    <el-input v-model="ruleForm.psw" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading" @click="submitForm(ruleFormRef)"
                        >登录</el-button
                    >
                    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- <router-link to="/">点击跳转至首页</router-link>
            <br /><br />
            <router-link to="/vueUse">点击跳转至vueUse页面</router-link> -->
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive, ref } from 'vue';
    import API from '@/api';
    import type { FormInstance, FormRules } from 'element-plus';
    import { ElMessage } from 'element-plus';
    import { useRouter, useRoute } from 'vue-router';
    import { useUserStore } from '@/store/user';

    export default defineComponent({
        name: 'LoginPage'
    });
</script>
<script lang="ts" setup>
    const loading = ref(false);
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
        account: 'xgs',
        psw: '123456'
    });
    const router = useRouter();
    const route = useRoute();
    const userStore = useUserStore();

    const rules = reactive<FormRules>({
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        psw: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log('submit!');
                getLogin();
            } else {
                console.log('error submit!', fields);
            }
        });
    };

    const getLogin = async () => {
        loading.value = true;
        let { data } = await API.login({
            account: ruleForm.account,
            newPlatformType: 'Web动画',
            psw: ruleForm.psw,
            register_source: 'PPT转视频落地页1'
        });
        if (data.code != 200) {
            loading.value = false;
            return;
        }
        loading.value = false;
        userStore.updateUserInfo(data.data);
        ElMessage({
            message: '登录成功！',
            type: 'success'
        });
        router.replace({
            path: route.query.redirect ? (route.query.redirect as string) : '/index'
        });
        // router.push('/request');
        console.log(userStore.userInfo, userStore.loginStatus);
    };

    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.resetFields();
    };
</script>

<style lang="scss" scoped>
    .loginBox {
        @include al_center(100%, 800px);
        .content {
            width: 600px;
        }
    }
</style>
