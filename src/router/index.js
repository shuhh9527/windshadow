import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
import Dashboard from '@/views/dashboard'
import abc from '@/views/layout/WsMenu'
import PersonalCenter from '@/views/PersonalCenter'
import protocol from '@/views/protocol'
import listactivity from '@/views/list_activity'
// import From from '@/views/form'

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
      path: '/abc',
      name: 'abc',
      component: abc,
      children: []
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [ {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'all/protocol',
        name: 'protocol',
        component: protocol
      },
      {
        path: 'activity_game/list_activity',
        name: 'list_activity',
        component: listactivity
      }]
    },
    {
      path: '/hremp',
      name: 'hremp',
      component: Layout,
      children: [
        {
          path: 'PersonalCenter',
          name: 'PersonalCenter',
          component: PersonalCenter
        }
      ]
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: protocol
    }

    // {
    //   path: '*',
    //   name: 'dashboard',
    //   component: Dashboard
    // }
  ]
})
