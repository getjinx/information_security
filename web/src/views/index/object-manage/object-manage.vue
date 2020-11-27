<template>
    <div class="content">
        <div class="d-flex add" @click="dialogVisible = true;">
            <i class="el-icon-plus"></i>
            <span class="hint">添加对象</span>
        </div>
        <!-- <el-button class="d-flex down" @click="download" size="small" type="primary">下载模板</el-button>
        <el-upload
            class="upload-demo d-flex pl-3 pt-2"
            :headers="header"
            action="http://localhost:3000/TargetObject/UploadExcel" 
            :show-file-list="false"
            name="excel"
            :on-success="success"
            :on-error="fail">
            <el-button size="small" type="primary">上传文件</el-button>
        </el-upload> -->
        <el-table :data="tableData" border height="100%" class="w-100 h-100 mt-3" style="overflow:auto;"
        :highlight-current-row="true" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
            <el-table-column prop="_id" label="ID" width="250"></el-table-column>
            <el-table-column prop="objectName" width="350" label="名称"></el-table-column>
            <el-table-column prop="objectDescription" label="详细描述"></el-table-column>
            <el-table-column label="操作" width="250" align="center">
            <template slot-scope="scope">
                <el-button @click="go(scope.row)" type="text" size="small">进入</el-button>
                <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="check(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="id == 0 ? '添加':'修改'" :visible.sync="dialogVisible" width="30%">
            <el-form label-width="80px">
                <el-form-item label="名称">
                    <el-input placeholder="请输入名称" class="input" v-model="newName"></el-input>
                </el-form-item>
                <el-form-item label="详情描述">
                    <el-input placeholder="请输入详细描述" class="input" v-model="newDes" type="textarea" :autosize="{ minRows: 2, maxRows: 10}"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false;id = 0;newDes = '';newName=''">取 消</el-button>
                <el-button type="primary" @click="add()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="确认删除" :visible.sync="deleteVisiable" width="30%">
            <span>确认删除id为{{id}}的记录?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteVisiable = false;id = 0;newDes = '';newName=''">取 消</el-button>
                <el-button type="primary" @click="remove">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script src="./object-manage.js"></script>
<style lang="scss" src="./object-manage.scss" scoped></style>