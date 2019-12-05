import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'
import Dashboard from '@/views/dashboard'
import abc from '@/views/layout/WsMenu'
import PersonalCenter from '@/views/PersonalCenter'
import protocol from '@/views/protocol'
import listactivity from '@/views/activityManage/list_activity'
import addactive from '@/views/activityManage/addactive'
import lookactive from '@/views/activityManage/lookactive'
import user_activity from '@/views/user_activity'
import login from '@/views/login/index'
// import From from '@/views/form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
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
      },
      {
        path: 'activityManage/addactive',
        name: 'addactive',
        component: addactive
      },
      {
        path: 'activityManage/lookactive',
        name: 'lookactive',
        component: lookactive
      },{
        path: 'user_activity',
        name: 'user_activity',
        component: user_activity
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
      name: 'protocol2',
      component: protocol
    }

    // {
    //   path: '*',
    //   name: 'dashboard',
    //   component: Dashboard
    // }
  ]
})
