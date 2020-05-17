<template>
  <el-container>
    <!-- 头部 -->
    <!-- <el-header>
    </el-header> -->
    <!-- 主体内容 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 导航菜单 -->
        <el-menu
          :router="true"
          :unique-opened="true"
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 一级菜单 首页 -->
          <el-menu-item index="/layout/home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <!-- 一级菜单 用户管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/layout/users">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 一级菜单 权限管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/layout/roles">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/rights">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 子路由出口，千万不能少 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 子组件
  components: {
    // PersonCenterDialog,
    // News
  },
  methods: {}
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
/* 头部 */
.el-header {
  padding: 0;
  background-color: #b3c1cd;
  color: #333;
  text-align: center;
}
.el-row {
  height: 100%;
  /* logo */
  /* .logo { */
  /* height: 100%; */
  /* text-align: left; */
  /* padding-left: 15px; */
  /* } */
  /* 标题 */
  /* .title { */
  /* height: 100%; */
  /* line-height: 43px; */
  /* h1 { */
  /* color: white; */
  /* font-size: 28px; */
  /* margin: 0; */
  /* } */
  /* } */
  /* 右侧退出部分 */
  /* .right { */
  /* line-height: 60px; */
  /* font-weight: bold; */
  /* text-align: right; */
  /* padding-right: 20px; */
  /* span { */
  /* margin-right: 5px; */
  /* } */
  /* a { */
  /* text-decoration: none; */
  /* color: rgb(177, 7, 7); */
  /* } */
  /* } */
}
/* 左侧 */
.el-aside {
  position: relative;
  background-color: #545c64;
  color: #333;
  /* line-height: 200px; */
  /* 个人中心 */
  /* .perCenter { */
  /* position: absolute; */
  /* left: 0; */
  /* bottom: 0; */
  /* } */
}
/* 主体内容 */
.el-main {
  background-color: #eaeef1;
  color: #333;
  padding: 0;
}
</style>
