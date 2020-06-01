<template>
  <div class="app_wapper">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside class="slider_container">
        <el-menu class="sub_meuns_wapper" mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
          <!-- 菜单组件 -->
          <side-menus :routes="getRoutes"></side-menus>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
// 左侧菜单组件
import sideMenus from '@/components/sideMenus'
export default {
  computed: {
    getRoutes() {
      return global.antRouter
    }
  },
  components: {
    sideMenus
  },
  data() {
    return {
      userRole: 'Topest'
    }
  },
  methods: {
    outSystem() {
      // 退出系统
      // localStorage.setItem('userRole', '')
      // 跳转到登录页的时候顺便刷新
      // window.location.href = window.location.origin + window.location.pathname
    }
  },
  mounted() {
    // console.log("菜单的展开跟路由有关系，查看elementui--el-menu  的default-active 属性")
    // console.log(this.$route.path)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*wapper*/
.app_wapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.app_content {
  min-height: 500px;
  margin-left: 180px;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.app_wapper .el-aside,
.slider_container .el-menu {
  color: #333;
  transition: width 0.28s;
  width: 180px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  background-color: rgb(48, 65, 86);
}
</style>
