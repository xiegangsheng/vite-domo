<template>
    <div class="cacheBox">
        <div class="content">
            <h2> 这里是缓存页面 </h2>
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
                    <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup name="Cache">
    import type { FormInstance, FormRules } from 'element-plus';
    import { ElMessage } from 'element-plus';
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
        account: '',
        psw: ''
    });

    const rules = reactive<FormRules>({
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        psw: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                ElMessage({
                    message: `账号：${ruleForm.account}，提交成功！`,
                    type: 'success'
                });
            } else {
                console.log('error submit!', fields);
            }
        });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.resetFields();
    };

    onMounted(() => {
        console.log('onMounted触发了');
    });
    onActivated(() => {
        console.log('onActivated触发了');
    });
</script>

<style lang="scss" scoped>
    .cacheBox {
        @include al_center(100%, 400px);
        .content {
            width: 600px;
        }
    }
</style>
