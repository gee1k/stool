import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import CoordinateTransform from './components/CoordinateTransform.vue'
import CronExpressions from './components/CronExpressions.vue'


Vue.config.debug = true
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
    {
        path: '/',
        redirect:'/coordtransform'
    },
    {
        path: '/coordtransform',
        component: CoordinateTransform
    },
    {
        path:'/cron',
        component:CronExpressions
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
