<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-card class="box-card">
                <el-card class="box-card">
                    坐标转换工具：提供百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
                </el-card>
                <br>
                <div class="grid-content bg-purple-dark">
                    <el-input type="textarea" id="coord"
                              placeholder="坐标：120.644049,31.285887;120.644049,31.285887;120.5123,31.95645"
                              :autosize="{minRows: 8}"
                              v-model="coord"
                              @keyup.native="verificationCoord">
                    </el-input>
                    <br>
                    <el-alert
                            title="提示"
                            type="info"
                            description="多个坐标以';'分开，中文标点会被自动转成英文标点"
                            show-icon
                            :closable="false">
                    </el-alert>
                    <br>
                    <el-select v-model="method" placeholder="转换方式" id="method">
                        <el-option
                                v-for="item in methods"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <br>
                    <el-input
                            id="result"
                            type="textarea"
                            placeholder="结果"
                            :autosize="{minRows: 8}"
                            v-model="result"
                            readonly>
                    </el-input>

                    <br>
                    <p>
                    <div style="float: left;">
                        <el-tooltip class="item" effect="dark" content="复制结果到剪切板" placement="bottom">
                            <el-button type="primary" data-clipboard-action="copy"
                                       data-clipboard-target="#result" class="copyBtn">复制结果
                            </el-button>
                        </el-tooltip>

                    </div>
                    <div style="float: right;">
                        <el-tooltip class="item" effect="dark" content="清空坐标和结果" placement="bottom">
                            <el-button type="primary" v-on:click.native="clear">清空</el-button>
                        </el-tooltip>

                        <el-tooltip class="item" effect="dark" content="开始转换坐标" placement="bottom">
                            <el-button type="success" v-on:click.native="transform">转换</el-button>
                        </el-tooltip>
                    </div>
                    </p>
                    <br><br>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    require("script!./../lib/CoordinateTransform.js")
    var $ = require("../lib/jquery-2.2.0.min.js")

    export default {
        data() {
            return {
                methods: [{
                    value: 'BD09ToWGS84',
                    label: '百度(BD09)转WGS84'
                }, {
                    value: 'WGS84ToBD09',
                    label: 'WGS844转百度(BD09)'
                }, {
                    value: 'GCJ02ToWGS84',
                    label: '火星坐标(GCJ02)转WGS84'
                }, {
                    value: 'WGS84ToGCJ02',
                    label: 'WGS84转火星坐标(GCJ02)'
                }, {
                    value: 'BD09ToGCJ02',
                    label: '百度(BD09)转火星坐标(GCJ02)'
                }, {
                    value: 'GCJ02ToBD09',
                    label: '火星坐标(GCJ02)转百度(BD09)'
                }],
                method: '',
                coord: '',
                result: ''
            }
        },
        mounted: function () {
            var clipboard = new Clipboard('.copyBtn')
            var vm = this
            clipboard.on('success', function (e) {
                vm.$message({
                    showClose: true,
                    message: '结果内容已复制到剪切板！',
                })
            })
            clipboard.on('error', function (e) {
                vm.$message({
                    showClose: true,
                    message: '复制失败，请手动复制！',
                    type: 'error'
                })
            })

        },
        methods: {
            verificationCoord(){
                this.coord = this.coord.replace('，', ',').replace('；', ';').replace(/[^,;\.0-9]/g, '')
            },
            clear(){
                this.coord = ''
                this.result = ''
            },
            transform(){
                let errorMsg = ''
                if (this.coord == null || this.coord.length == 0) {
                    errorMsg = '请填写需要转换坐标！'
                    $('#coord').find('textarea').focus()
                } else if (checkCoord(this.coord)) {
                    errorMsg = '坐标格式错误，请检查！'
                    $('#coord').find('textarea').focus()
                } else if (this.method == null || this.method == '') {
                    errorMsg = '请选择转换方式！'
                    $('#method').find('input').focus()
                }
                if (errorMsg != '') {
                    this.$message({
                        showClose: true,
                        message: errorMsg,
                        type: 'error'
                    })
                    return
                }


                let coords = this.coord.split(';')
                let results = []
                let vm = this
                coords.forEach(item=> {
                    let lngLat = item.split(',')
                    let lng = parseFloat(lngLat[0])
                    let lat = parseFloat(lngLat[1])
                    let resultLngLat
                    switch (vm.method) {
                        case vm.methods[0].value:
                            resultLngLat = CoordinateTransform.transformBD09ToWGS84(lng, lat).join(',').toString()
                            break;
                        case vm.methods[1].value:
                            resultLngLat = CoordinateTransform.transformWGS84ToBD09(lng, lat).join(',').toString()
                            break;
                        case vm.methods[2].value:
                            resultLngLat = CoordinateTransform.transformGCJ02ToWGS84(lng, lat).join(',').toString()
                            break;
                        case vm.methods[3].value:
                            resultLngLat = CoordinateTransform.transformWGS84ToGCJ02(lng, lat).join(',').toString()
                            break;
                        case vm.methods[4].value:
                            resultLngLat = CoordinateTransform.transformBD09ToGCJ02(lng, lat).join(',').toString()
                            break;
                        case vm.methods[5].value:
                            resultLngLat = CoordinateTransform.transformGCJ02ToBD09(lng, lat).join(',').toString()
                            break;
                    }
                    results.push(resultLngLat)
                })
                this.result = results.join(';').toString()
            }
        }
    }
    function checkCoord(coordStr) {
        let coords = coordStr.split(';')
        if (coords.length == 0)
            return false
        let error = false
        coords.forEach(item=> {
            let lngLat = item.split(',')
            if (lngLat.length != 2) {
                error = true
                return false
            }
            let lng = parseFloat(lngLat[0])
            let lat = parseFloat(lngLat[1])
            if (isNaN(lng) || isNaN(lat)) {
                error = true
                return false
            }
        })

        return error
    }
</script>
<style>

</style>