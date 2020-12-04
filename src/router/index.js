import Vue from 'vue'
import Router from 'vue-router'
import planets from '@/pages/planets'
import planetInfo from '@/pages/planetInfo'
import statisticsInfo from '@/pages/statisticsInfo'
import statistics from '@/pages/statistics'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/planets',
            component: planets
        },
        {
            path:'/statistics',
            component: statistics
        },
        {
            path:'/planets/:name',
            name:'planets',
            component: planetInfo
        },
        {
            path:'/statistics/:name',
            name:'statistics',
            component: statisticsInfo
        },
    ]
})