<template>
    <div class="content">
        <div class="detail-table">
            <el-row class="proj-info">
                <span>资产信息(名称、所属部门、重要等级)</span>
            </el-row>
            <el-row class="infos">
                <div class="row" v-for="item in yjzc" :key="item.id">
                    <label>名称</label>
                    <el-input class="info-input" readonly v-model="item.assetName"></el-input>
                    <label>部门</label>
                    <el-input class="info-input" readonly v-model="item.apartment"></el-input>
                    <label>等级</label>
                    <el-input class="info-input" readonly v-model="item.averageLevel"></el-input>
                </div>
                <div class="row" v-for="item in rjzc" :key="item.id">
                    <label>名称</label>
                    <el-input class="info-input" readonly v-model="item.assetName"></el-input>
                    <label>部门</label>
                    <el-input class="info-input" readonly v-model="item.depart"></el-input>
                    <label>等级</label>
                    <el-input class="info-input" readonly v-model="item.averageLevel"></el-input>
                </div>
            </el-row>
        </div>
        <div class="detail-table">
            <el-row class="proj-info">
                <span>威胁信息(名称、所属部门、重要等级)</span>
            </el-row>
            <el-row class="infos">
                <div class="row" v-for="item in yjThreaten" :key="item.id">
                    <label>名称</label>
                    <el-input class="info-input" readonly v-model="item.assetName"></el-input>
                    <label>部门</label>
                    <el-input class="info-input" readonly v-model="item.depart"></el-input>
                    <label>等级</label>
                    <el-input class="info-input" readonly v-model="item.averageLevel"></el-input>
                </div>
                <div class="row" v-for="item in rjThreaten" :key="item.id">
                    <label>名称</label>
                    <el-input class="info-input" readonly v-model="item.assetName"></el-input>
                    <label>部门</label>
                    <el-input class="info-input" readonly v-model="item.apartment"></el-input>
                    <label>等级</label>
                    <el-input class="info-input" readonly v-model="item.averageLevel"></el-input>
                </div>
            </el-row>
        </div>
        <div id="myChart2" class="chart"></div>
        <div id="myChart1" class="chart"></div>
        <el-button type="primary" @click="compose" class="compose">生成报告</el-button>
    </div>
</template>

<script src="./analysis.js"></script>
<style lang="scss" src="./analysis.scss" scoped></style>