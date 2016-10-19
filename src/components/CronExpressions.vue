<template>
    <el-row>
        <el-col :span="16" :offset="4">
            <el-card class="box-card">
                <el-card class="box-card">
                    Cron表达式生成器：Cron表达式通常用于配置计划任务的触发时间。一个cron表达式是一个由六个或者七个子表达式（字段）组成的字符串。而子表达式或者称为字段之间用空格隔开。
                </el-card>
                <br>
                <el-tabs type="card" @tab-click="handleClick" id="tab">
                    <el-tab-pane label="秒">
                        <div class="line">
                            <el-radio class="radio" v-model="second" label="1">每秒
                                允许的通配符[, - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="second" label="2">周期从</el-radio>
                            <el-input-number v-model="cycleStart_second" class="floatLeft" :min="1" :max="58"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_second" class="floatLeft" :min="2" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">秒</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="second" label="3">从</el-radio>
                            <el-input-number v-model="timerStart_second" class="floatLeft" :min="0" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">秒开始，每</span>
                            <el-input-number v-model="timerEnd_second" class="floatLeft" :min="1" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">秒，执行一次</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="second" label="4">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="secondList" v-for="sc in scOrMin" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="sc"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="分钟">
                        <div class="line">
                            <el-radio class="radio" v-model="minute" label="1">分钟
                                允许的通配符[, - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="minute" label="2">周期从</el-radio>
                            <el-input-number v-model="cycleStart_minute" class="floatLeft" :min="1" :max="58"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_minute" class="floatLeft" :min="2" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">分钟</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="minute" label="3">从</el-radio>
                            <el-input-number v-model="timerStart_minute" class="floatLeft" :min="0" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">分钟开始，每</span>
                            <el-input-number v-model="timerEnd_minute" class="floatLeft" :min="1" :max="59"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">分钟，执行一次</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="minute" label="4">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="minuteList" v-for="min in scOrMin" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="min"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="小时">
                        <div class="line">
                            <el-radio class="radio" v-model="hour" label="1">小时
                                允许的通配符[, - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="hour" label="2">周期从</el-radio>
                            <el-input-number v-model="cycleStart_hour" class="floatLeft" :min="0" :max="23"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_hour" class="floatLeft" :min="2" :max="23"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">小时</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="hour" label="3">从</el-radio>
                            <el-input-number v-model="timerStart_hour" class="floatLeft" :min="0" :max="23"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">小时开始，每</span>
                            <el-input-number v-model="timerEnd_hour" class="floatLeft" :min="1" :max="23"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">小时，执行一次</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="hour" label="4">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="hourList" v-for="hour in hours" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="hour"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="日">
                        <div class="line">
                            <el-radio class="radio" v-model="day" label="1">日 允许的通配符[,
                                - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio" v-model="day" label="2">不指定</el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="day" label="3">周期从</el-radio>
                            <el-input-number v-model="cycleStart_day" class="floatLeft" :min="1" :max="31"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_day" class="floatLeft" :min="1" :max="31"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">日</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="day" label="4">从</el-radio>
                            <el-input-number v-model="timerStart_day" class="floatLeft" :min="1" :max="31"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">日开始，每</span>
                            <el-input-number v-model="timerEnd_day" class="floatLeft" :min="1" :max="31"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">天，执行一次</span>
                        </div>
                        <br>

                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="day" label="5">每月</el-radio>
                            <el-input-number v-model="day_num" class="floatLeft" :min="1" :max="31"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">号最近的那个工作日</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio" v-model="day" label="6">本月最后一天</el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="day" label="7">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="dayList" v-for="day in days" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="day"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="月">
                        <div class="line">
                            <el-radio class="radio" v-model="month" label="1">月
                                允许的通配符[, - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio" v-model="month" label="2">不指定</el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="month" label="3">周期从</el-radio>
                            <el-input-number v-model="cycleStart_month" class="floatLeft" :min="1" :max="12"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_month" class="floatLeft" :min="1" :max="12"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">月</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="month" label="4">从</el-radio>
                            <el-input-number v-model="timerStart_month" class="floatLeft" :min="1" :max="12"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">月开始，每</span>
                            <el-input-number v-model="timerEnd_month" class="floatLeft" :min="1" :max="12"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">月，执行一次</span>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="month" label="5">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="monthList" v-for="month in months" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="month"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="周">
                        <div class="line">
                            <el-radio class="radio" v-model="week" label="1">周
                                允许的通配符[, - * /]
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio" v-model="week" label="2">不指定</el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="week" label="3">周期从星期</el-radio>
                            <el-input-number v-model="cycleStart_week" class="floatLeft" :min="1" :max="7"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">-</span>
                            <el-input-number v-model="cycleEnd_week" class="floatLeft" :min="1" :max="7"
                                             size="small" number></el-input-number>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="week" label="4">第</el-radio>
                            <el-input-number v-model="timerStart_week" class="floatLeft" :min="1" :max="7"
                                             size="small" number></el-input-number>
                            <span class="floatLeft">周的星期</span>
                            <el-input-number v-model="timerEnd_week" class="floatLeft" :min="1" :max="7"
                                             size="small" number></el-input-number>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="week" label="5">本月最后一个星期</el-radio>
                            <el-input-number v-model="lastWeekDay" class="floatLeft" :min="1" :max="7"
                                             size="small" number></el-input-number>
                        </div>
                        <br>
                        <div class="line">
                            <br>
                            <el-radio class="radio floatLeft" v-model="week" label="6">指定</el-radio>
                            <br>
                            <br>
                            <el-checkbox-group v-model="weekList" v-for="week in weeks" class="floatLeft"
                                               style="margin: 5px;">
                                <el-checkbox class="checkbox" :label="week"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <br>
                    </el-tab-pane>
                    <el-tab-pane label="年">
                        <div class="line">
                            <el-radio class="radio" v-model="year" label="1">不指定
                                允许的通配符[, - * /] 非必填
                            </el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio" v-model="year" label="2">每年</el-radio>
                        </div>
                        <br>
                        <div class="line">
                            <el-radio class="radio floatLeft" v-model="year" label="3">周期从</el-radio>
                            <el-date-picker
                                    v-model="cycleStart_year"
                                    align="right"
                                    type="year"
                                    placeholder="选择年">
                            </el-date-picker>
                            -
                            <el-date-picker
                                    v-model="cycleEnd_year"
                                    align="right"
                                    type="year"
                                    placeholder="选择年">
                            </el-date-picker>
                        </div>
                        <br>
                    </el-tab-pane>
                </el-tabs>

                <el-card class="box-card" id="expressions">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">表达式</span>
                    </div>
                    <table style="height: 100px;">
                        <tbody>
                        <tr>
                            <td style="min-width: 100px;">
                            </td>
                            <td align="center">
                                秒
                            </td>
                            <td align="center">
                                分钟
                            </td>
                            <td align="center">
                                小时
                            </td>
                            <td align="center">
                                日
                            </td>
                            <td align="center">
                                月<br/>
                            </td>
                            <td align="center">
                                星期
                            </td>
                            <td align="center">
                                年
                            </td>
                        </tr>
                        <tr>
                            <td>
                                表达式字段:
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_second"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_minute"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_hour"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_day"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_month"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_week"
                                        readonly>
                                </el-input>
                            </td>
                            <td>
                                <el-input
                                        size="small"
                                        v-model="v_year"
                                        readonly>
                                </el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>Cron 表达式:</td>
                            <td colspan="7">
                                <el-input id="cron"
                                        size="small"
                                        v-model="cron">
                                </el-input>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <div class="copyDiv">
                        <el-tooltip class="item" effect="dark" content="复制Cron表达式到剪切板" placement="left">
                            <el-button type="primary" data-clipboard-action="copy"
                                       data-clipboard-target="#cron" class="copyBtn">复制表达式
                            </el-button>
                        </el-tooltip>
                    </div>
                    <el-alert
                            title="提示"
                            type="info"
                            description="复制Cron表达式到上面的表达式输入框可解析到对应的UI上"
                            show-icon
                            :closable="false">
                    </el-alert>
                </el-card>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    require("script!./../lib/cron.js")
    export default {
        data(){
            return {
                scOrMin: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
                    '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33',
                    '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
                    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
                ],
                hours: [
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
                    '18', '19', '20', '21', '22', '23'
                ],
                days: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
                    '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
                ],
                months: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
                ],
                weeks: [
                    '1', '2', '3', '4', '5', '6', '7'
                ],
                //second
                second: '1',
                cycleStart_second: 1,
                cycleEnd_second: 2,
                timerStart_second: 0,
                timerEnd_second: 1,
                secondList: [],
                //minute
                minute: '1',
                cycleStart_minute: 1,
                cycleEnd_minute: 2,
                timerStart_minute: 0,
                timerEnd_minute: 1,
                minuteList: [],
                //hour
                hour: '1',
                cycleStart_hour: 0,
                cycleEnd_hour: 2,
                timerStart_hour: 0,
                timerEnd_hour: 1,
                hourList: [],
                //day
                day: '1',
                cycleStart_day: 0,
                cycleEnd_day: 1,
                timerStart_day: 0,
                timerEnd_day: 1,
                day_num: 1,
                dayList: [],
                //month
                month: '1',
                cycleStart_month: 0,
                cycleEnd_month: 1,
                timerStart_month: 0,
                timerEnd_month: 1,
                monthList: [],
                //Week
                week: '2',
                cycleStart_week: 0,
                cycleEnd_week: 1,
                timerStart_week: 0,
                timerEnd_week: 1,
                lastWeekDay: 1,
                weekList: [],
                //year
                year: '1',
                cycleStart_year: '',
                cycleEnd_year: '',
            }
        },
        mounted: function () {
            var clipboard = new Clipboard('.copyBtn')
            var vm = this
            clipboard.on('success', function (e) {
                vm.$message({
                    showClose: true,
                    message: '表达式已复制到剪切板！',
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
            handleClick(tab) {
                console.log(tab);
            }
        },
        computed: {
            v_second: {
                get(){
                    let res = '*'
                    switch (this.second) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = this.cycleStart_second + '-' + this.cycleEnd_second
                            break
                        case '3':
                            res = this.timerStart_second + '/' + this.timerEnd_second
                            break
                        case '4':
                            let seconds = this.secondList.join(',')
                            if (seconds.length > 0)
                                res = seconds.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '*'
                            break
                    }
                    return res
                },
                set(newValue){
                    initObj(this, newValue, "second")
                }
            },
            v_minute: {
                get(){
                    let res = '*'
                    switch (this.minute) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = this.cycleStart_minute + '-' + this.cycleEnd_minute
                            break
                        case '3':
                            res = this.timerStart_minute + '/' + this.timerEnd_minute
                            break
                        case '4':
                            let minutes = this.minuteList.join(',')
                            if (minutes.length > 0)
                                res = minutes.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '*'
                            break
                    }
                    return res
                },
                set(newValue){
                    initObj(this, newValue, "minute")
                }
            },
            v_hour: {
                get(){
                    let res = '*'
                    switch (this.hour) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = this.cycleStart_hour + '-' + this.cycleEnd_hour
                            break
                        case '3':
                            res = this.timerStart_hour + '/' + this.timerEnd_hour
                            break
                        case '4':
                            let hours = this.hourList.join(',')
                            if (hours.length > 0)
                                res = hours.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '*'
                            break
                    }
                    return res
                },
                set(newValue){
                    initObj(this, newValue, "hour")
                }
            },
            v_day: {
                get(){
                    let res = '*'
                    switch (this.day) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = '?'
                            break
                        case '3':
                            res = this.cycleStart_day + '-' + this.cycleEnd_day
                            break
                        case '4':
                            res = this.timerStart_day + '/' + this.timerEnd_day
                            break
                        case '5':
                            res = this.day_num + "W"
                            break
                        case '6':
                            res = 'L'
                            break
                        case '7':
                            let days = this.dayList.join(',')
                            if (days.length > 0)
                                res = days.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '*'
                            break
                    }
                    return res
                },
                set(newValue){
                    initDay(this, newValue);
                }
            },
            v_month: {
                get(){
                    let res = '*'
                    switch (this.month) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = '?'
                            break
                        case '3':
                            res = this.cycleStart_month + '-' + this.cycleEnd_month
                            break
                        case '4':
                            res = this.timerStart_month + '/' + this.timerEnd_month
                            break
                        case '5':
                            let months = this.monthList.join(',')
                            if (months.length > 0)
                                res = months.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '*'
                            break
                    }
                    return res
                },
                set(newValue){
                    initMonth(this, newValue)
                }
            },
            v_week: {
                get(){
                    let res = '?'
                    switch (this.week) {
                        case '1':
                            res = '*'
                            break
                        case '2':
                            res = '?'
                            break
                        case '3':
                            res = this.cycleStart_week + '-' + this.cycleEnd_week
                            break
                        case '4':
                            res = this.timerStart_week + '/' + this.timerEnd_week
                            break
                        case '5':
                            res = this.lastWeekDay + 'L'
                            break
                        case '6':
                            let weeks = this.weekList.join(',')
                            if (weeks.length > 0)
                                res = weeks.toString()
                            else
                                res = '?'
                            break
                        default:
                            res = '?'
                            break
                    }
                    return res
                },
                set(newValue){
                    initWeek(this, newValue)
                }
            },
            v_year: {
                get(){
                    let res = ''
                    switch (this.year) {
                        case '1':
                            res = ''
                            break
                        case '2':
                            res = '*'
                            break
                        case '3':
                            res = this.cycleStart_year + '-' + this.cycleEnd_year
                            break
                        default:
                            res = ''
                            break
                    }
                    return res
                },
                set(newValue){
                    initYear(this, newValue)
                }
            },
            cron: {
                get(){
                    return this.v_second + ' ' + this.v_minute + ' ' + this.v_hour + ' ' + this.v_day + ' ' + this.v_month + ' ' + this.v_week + ' ' + this.v_year
                },
                set(newValue){
                    let regs = newValue.split(' ')
                    this.v_second = regs[0]
                    this.v_minute = regs[1]
                    this.v_hour = regs[2]
                    this.v_day = regs[3]
                    this.v_month = regs[4]
                    this.v_week = regs[5]
                    if (regs.length > 6) {
                        this.v_year = regs[6]
                    }
                }
            }
        },
        watch: {}
    }

</script>
<style>
    .floatLeft {
        font-size: 14px;
        float: left;
        vertical-align: middle;
        margin-right: 5px;
    }

    #tab {
        height: 400px;
    }

    #expressions {
        bottom: 10px;
    }
    .copyDiv{
        float: right;
        margin-bottom: 10px;
    }
</style>