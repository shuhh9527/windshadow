import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
import Dashboard from '@/views/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: []
    },
    {
      path: '*',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
