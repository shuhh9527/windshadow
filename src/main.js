// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // elment-ui样式
import mockdata from './mock'// 此部分引入的是我们所编写的mockjs文档
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(mockdata)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
