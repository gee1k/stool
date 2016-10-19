<template>
    <div>
        <div id="head">
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-menu default-active="coordtransform" class="el-menu-demo" mode="horizontal" @select="navChange"
                             :router="true">
                        <el-submenu index="1">
                            <template slot="title">JSON相关</template>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">格式化</template>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">编码/加密</template>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">其他工具</template>
                            <el-menu-item index="coordtransform">坐标转换工具</el-menu-item>
                            <el-menu-item index="cron">Cron表达式</el-menu-item>
                        </el-submenu>

                    </el-menu>
                </el-col>
            </el-row>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    require("script!./lib/clipboard.min.js")
    export default{
        methods: {
            navChange(index, indexPath){
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
        margin-bottom: 10px;
    }
</style>