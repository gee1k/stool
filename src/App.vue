<template>
    <div>
        <div id="head">
            <el-menu default-active="coordtransform" mode="horizontal" @select="handleselect" :router="true">
                <el-menu-item index="1">Svend</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">GIS相关</template>
                    <el-menu-item index="coordtransform">坐标转换工具</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">其他工具</template>
                    <el-menu-item index="generatecron">Cron表达式</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    require("script!./lib/clipboard.min.js")
    export default{
        methods: {
            handleselect(index, indexPath){
                if (index === '1')
                    window.location.href = 'http://svend.cc'
                console.log('${index}---${indexPath}')
            }
        }
    }
</script>
<style>
    * {
        padding: 0;
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    #head {
        margin-bottom: 20px;
    }
</style>