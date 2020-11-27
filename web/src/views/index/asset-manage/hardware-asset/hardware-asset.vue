<template>
    <div class="content">
        <div class="d-flex add" @click="dialogVisible = true;">
            <i class="el-icon-plus"></i>
            <span class="hint">添加</span>
        </div>
        <el-table :data="tableData" height="100%" border class="w-100 h-100 mt-3" style="overflow:auto;"
        :highlight-current-row="true" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
            <el-table-column prop="_id" label="ID" width="180"></el-table-column>
            <el-table-column prop="assetName" label="设备名称"></el-table-column>
            <el-table-column prop="assetNumber" label="设备编号"></el-table-column>
            <el-table-column prop="dutyMan" label="负责人"></el-table-column>
            <el-table-column prop="depart" label="所属部门"></el-table-column>
            <el-table-column prop="level" label="重要等级"></el-table-column>
            <el-table-column prop="rangeDescription" label="范围描述"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column label="操作" width="150" align="center">
            <template slot-scope="scope">
                <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="check(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="id == 0 ? '添加':'修改'" :visible.sync="dialogVisible" width="30%">
            <el-form label-width="80px">
                <el-form-item label="名称">
                    <el-input placeholder="请输入名称" v-model="newName"></el-input>
                </el-form-item>
                <el-form-item label="编号">
                    <el-input placeholder="请输入编号" v-model="newNum"></el-input>
                </el-form-item>
                <el-form-item label="负责人">
                    <el-input placeholder="请输入负责人" v-model="newDutyMan"></el-input>
                </el-form-item>
                <el-form-item label="所属部门">
                    <el-input placeholder="请输入所属部门" v-model="newDepart"></el-input>
                </el-form-item>
                <el-form-item label="重要等级">
                    <el-select v-model="newLevel" placeholder="请选择等级" class="input">
                        <el-option v-for="item in 5" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="范围描述">
                    <el-input placeholder="请输入详细描述" class="input" v-model="newDes" type="textarea" :autosize="{ minRows: 2, maxRows: 10}"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input placeholder="请输入备注" class="input" v-model="newHint" type="textarea" :autosize="{ minRows: 2, maxRows: 10}"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false;id = 0;newNum='';newDutyMan='';newDes = '';newName='';newDepart='信息中心';newLevel=1;newHint=''">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="确认删除" :visible.sync="deleteVisiable" width="30%">
            <span>确认删除id为{{id}}的记录?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteVisiable = false;id = 0;newNum='';newDutyMan='';newDes = '';newName='';newDepart='信息中心';newLevel=1;newHint=''">取 消</el-button>
                <el-button type="primary" @click="remove">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script src="./hardware-asset.js"></script>
<style lang="scss" src="./hardware-asset.scss" scoped></style>