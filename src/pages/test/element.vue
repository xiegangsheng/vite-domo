<template>
    <div>
        <h2> 这里是element组件测试页面 </h2>
        <div>
            <el-button type="primary" @click="open">成功提示</el-button>
            <el-button type="primary" @click="centerDialogVisible = true">表格</el-button>
        </div>
        <br />
        <router-link to="/">点击跳转至首页</router-link>
        <el-dialog v-model="centerDialogVisible" title="表格" width="600px" destroy-on-close center>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="100" />
                <el-table-column prop="address" label="Address" />
            </el-table>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script lang="ts">
    import { ElMessage } from 'element-plus';
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name: 'Element',
        setup() {
            const open = () => {
                ElMessage({
                    message: 'Congrats, this is a success message.',
                    type: 'success'
                });
            };

            const tableData = [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }
            ];

            const centerDialogVisible = ref(false);

            return {
                open,
                tableData,
                centerDialogVisible
            };
        }
    });
</script>
<style lang="scss" scoped></style>
