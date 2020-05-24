// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入ElementUI的js
import ElementUI from 'element-ui'
// 导入ElementUI的css
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

// 引入全局公用样式(css文件可直接写路径)
import '@/styles/index.css'
// 引入全局文件
import '@/utils/global'
import '@/permission.js'

// 引入mock数据，关闭则注释该行
require('./mock')
// 控制路由表的js文件
Vue.prototype.$http = axios

// 安装ElementUI的插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
