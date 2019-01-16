import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import InProgress from '@/components/InProgress'
import Completed from '@/components/Completed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/InProgress',
      name: 'InProgress',
      component: InProgress
    },
    {
      path: '/Completed',
      name: 'Completed',
      component: Completed
    }
  ]
})
