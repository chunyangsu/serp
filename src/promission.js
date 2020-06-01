import router from './router'
import axios from 'axios' // 获取组件的方法
import Layout from '@/views/layout'
const _import = require('./router/_import_' + process.env.NODE_ENV) // Layout 是架构组件，不在后台返回，在文件里单独引入

var getRouter // 用来获取后台拿到的路由

router.beforeEach((to, from, next) => {
  // console.log(getRouter)
  if (!getRouter) { // 不加这个判断，路由会陷入死循环
    if (!getObjArr('router')) {
      // console.log('beforeEach  getRouter')
      // 模拟请求后端返回路由表
      axios.get('http://localhost:8888/api/private/v1/routers/getRoutersList').then(response => {
        const {
          data,
          meta
        } = response.data
        if (meta.status === 200) {
          getRouter = data.router
          // 存储路由到localStorage
          saveObjArr('router', getRouter)
          // 执行路由跳转方法
          routerGo(to, next)
        }
      })
    } else {
      // 从localStorage拿到了路由
      getRouter = getObjArr('router') // 拿到路由
      routerGo(to, next)
    }
  } else {
    next()
  }
})

function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) // 过滤路由
  router.addRoutes(getRouter) // 动态添加路由
  global.antRouter = getRouter // 将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to,
    replace: true
  })
}

function saveObjArr(name, data) { // localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { // localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name))
}

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') { // Layout组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}
