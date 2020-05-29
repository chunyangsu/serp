import Vue from 'vue'
import Router from 'vue-router'
// 导入登录页组件
const layout = () => import('@/components/layout')
// 登录页
const reload = () => import('@/components/reLoad')

const main = () => import('@/views/index')
Vue.use(Router)

// 固定的路由表
export const fixedRouter = [{
  path: '',
  component: reload,
  hidden: true
}, {
  path: '',
  component: layout, // 整体页面的布局，包括左侧菜单和主内容区域
  children: [{
    path: 'main',
    component: main,
    meta: {
      title: '首页', // 菜单名称
      roles: ['user', 'admin'], // 当前菜单那些角色可以看到
      icon: 'el-icon-menu' // 左侧菜单的icon图标
    }
  }]
}]

// 需要权限判断展示的路由
export const permissionRouter = [{
  path: '/purchase',
  component: layout,
  name: 'Purchase',
  meta: {
    title: '采购管理',
    icon: 'el-icon-menu',
    roles: ['admin', 'user']
  },
  children: [{
    path: 'PurchaseInquiry',
    name: 'PurchaseInquiry',
    component: () => import('@/views/purchase/PurchaseInquiry'),
    meta: {
      title: '采购询价书',
      icon: 'el-icon-menu',
      roles: ['admin', 'user']
    }
  }, {
    path: 'SupplierQuotation',
    name: 'SupplierQuotation',
    component: () => import('@/views/purchase/SupplierQuotation'),
    meta: {
      title: '供应商报价单',
      icon: 'el-icon-menu',
      roles: ['admin', 'user']
    }
  }]
},
{
  path: '/product',
  name: 'Product',
  component: layout,
  meta: {
    title: '产品中心',
    icon: 'el-icon-menu',
    roles: ['admin']
  },
  // 二级菜单：规格参数
  children: [{
    path: '/product/param', // 这里的路径不能错，要加上前面的 /product
    name: 'param',
    component: () => import('@/views/product/param/index'),
    meta: {
      title: '规格参数',
      icon: 'el-icon-menu',
      roles: ['admin']
    },
    // 三级菜单
    children: [{
      path: 'SpecManage',
      name: 'SpecManage',
      component: () => import('@/views/product/param/SpecManage'),
      meta: {
        title: '规格管理',
        icon: 'el-icon-menu',
        roles: ['admin']
      }
    },
    {
      path: 'UnitManage',
      name: 'UnitManage',
      component: () => import('@/views/product/param/UnitManage'),
      meta: {
        title: '参数单位',
        icon: 'el-icon-menu',
        roles: ['admin']
      }
    }
    ]
  }, {
    path: 'ProductManage',
    name: 'ProductManage',
    component: () => import('@/views/product/ProductManage'),
    meta: {
      title: '产品管理',
      icon: 'el-icon-menu',
      roles: ['admin']
    }
  }]
}
]

export default new Router({
  mode: 'history',
  routes: fixedRouter
})
