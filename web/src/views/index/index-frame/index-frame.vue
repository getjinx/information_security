<template>
    <el-container style="border: 1px solid #eee" class="vh-100">
        <el-aside width="220px" class="bg-primary">
            <el-menu router :default-active="$route.path" :unique-opened="true">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-setting"></i>评估对象管理</template>
                        <el-menu-item index="/index/object-manage">评估对象管理</el-menu-item>
                </el-submenu>
                <el-submenu index="2" :disabled="!assetShow">
                    <template slot="title"><i class="el-icon-money"></i>资产管理</template>
                    <el-menu-item index="/index/asset-manage/hardware-asset">硬件资产</el-menu-item>
                    <el-menu-item index="/index/asset-manage/applied-asset">应用资产</el-menu-item>
                </el-submenu>
                <el-submenu index="3" :disabled="!assetShow">
                    <template slot="title"><i class="el-icon-share"></i>威胁扫描与管理</template>
                    <el-menu-item index="/index/threaten-manage/hardware-asset">硬件资产</el-menu-item>
                    <el-menu-item index="/index/threaten-manage/applied-asset">应用资产</el-menu-item>
                </el-submenu>
                <!-- <el-submenu index="4" :disabled="!assetShow">
                    <template slot="title"><i class="el-icon-help"></i>脆弱性扫描与管理</template>
                    <el-menu-item index="/index/vulnerability">重要资产脆弱性表</el-menu-item>
                </el-submenu> -->
                <el-submenu index="5" :disabled="!analysisShow">
                    <template slot="title"><i class="el-icon-data-analysis"></i>风险自动化综合分析</template>
                    <el-menu-item index="/index/analysis">风险评估</el-menu-item>
                </el-submenu>
                <!-- <el-submenu index="6" :disabled="!analysisShow">
                    <template slot="title"><i class="el-icon-document"></i>报告自动生成</template>
                    <el-menu-item index="/index/document">生成报告</el-menu-item>
                </el-submenu> -->
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header class="bg-info text-dark fs-md text-r">
            <!-- <el-dropdown>
                <i class="el-icon-setting mr-3"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>袁泽彬</span> -->
            </el-header>
            
            <router-view @changeShow="changeShow" class="background"></router-view>
        </el-container>
    </el-container>
</template>

<script src="./index-frame.js"></script>
<style lang="scss" src="./index-frame.scss" scoped></style>