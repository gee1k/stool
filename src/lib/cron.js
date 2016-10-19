
function initWeek(vm, strVal) {
    let ary = []
    if (strVal == "*") {
        vm.week = '1'
    } else if (strVal == "?") {
        vm.week = '2'
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        vm.week = '3'
        vm.cycleStart_week = parseInt(ary[0])
        vm.cycleEnd_week = parseInt(ary[1])
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-')
        vm.week = '4'
        vm.timerStart_week = parseInt(ary[0])
        vm.timerEnd_week = parseInt(ary[1])
    } else if (strVal.split('L').length > 1) {
        ary = strVal.split('L')
        vm.week = '5'
        vm.lastWeekDay = parseInt(ary[0])
    } else {
        vm.week = '6'
        ary = strVal.split(",")
        vm.weekList = ary
    }
}

function initYear(vm, strVal) {
    let ary = []
    if (strVal.trim() == '') {
        vm.year = '1'
    }
    else if (strVal == "*") {
        vm.year = '2'
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-')
        vm.year = '3'
        vm.cycleStart_year = parseInt(ary[0])
        vm.cycleEnd_year = parseInt(ary[1])
    }
}

function initMonth(vm, strVal) {
    let ary = []
    if (strVal == "*") {
        vm.month = '1'
    } else if (strVal == "?") {
        vm.month = '2'
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-')
        vm.month = '3'
        vm.cycleStart_month = parseInt(ary[0])
        vm.cycleEnd_month = parseInt(ary[1])
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/')
        vm.month = '4'
        vm.timerStart_month = parseInt(ary[0])
        vm.timerEnd_month = parseInt(ary[1])
    } else {
        vm.month = '5'

        ary = strVal.split(",")
        vm.monthList = ary
    }
}

function initObj(vm, strVal, name) {
    let ary = []
    if (strVal == "*") {
        vm[name] = '1'
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-')
        vm[name] = '2'
        vm['cycleStart_' + name] = parseInt(ary[0])
        vm['cycleEnd_' + name] = parseInt(ary[1])
        console.info(vm['cycleStart_' + name])
        console.info(vm['cycleEnd_' + name])
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/')
        vm[name] = '3'
        vm['timerStart_' + name] = parseInt(ary[0])
        vm['timerEnd_' + name] = parseInt(ary[1])
        console.info(vm['timerStart_' + name])
        console.info(vm['timerEnd_' + name])
    } else {
        vm[name] = '4'
        if (strVal != "?") {
            ary = strVal.split(",")
            vm[name + 'List'] = ary
        }
    }
}

function initDay(vm, strVal) {
    let ary = []
    if (strVal == "*") {
        vm.day = '1'
    } else if (strVal == "?") {
        vm.day = '2'
    } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-')
        vm.day = '3'
        vm.cycleStart_day = parseInt(ary[0])
        vm.cycleEnd_day = parseInt(ary[0])
    } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/')
        vm.day = '4'
        vm.timerStart_day = parseInt(ary[0])
        vm.timerEnd_day = parseInt(ary[1])
    } else if (strVal.split('W').length > 1) {
        ary = strVal.split('W')
        vm.day = '5'
        vm.day_num = ary[0]
    } else if (strVal == "L") {
        vm.day = '6'
    } else {
        vm.day = '7'
        ary = strVal.split(",")
        vm.dayList = ary
    }
}