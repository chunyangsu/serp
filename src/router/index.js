import Vue from 'vue'
import Router from 'vue-router'
// 导入登录页组件
import Login from '@/views/login/Login'
// 导入Layout页面
import Layout from '@/views/layout/Layout'
// 导入Home页面
import Home from '@/views/home/Home'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/login',
    // name: 'Login',
    component: Login
  }, {
    path: '/layout',
    component: Layout,
    children: [{
      path: 'home',
      component: Home
    }]
  }]
})
