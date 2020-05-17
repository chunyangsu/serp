<template>
  <el-table
    :data="usersList"
    stripe
    border
    size="mini"
    style="width: 100%"
  >
    <el-table-column
      prop="name"
      label="姓名"
      min-width="60"
    >
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      min-width="60"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      usersList: []
    }
  },
  created() {
    this.getData()
    // loading效果
    // this.$myLoading.open()
    // setTimeout(() => {
    //   this.$myLoading.hide()
    // }, 3000)
  },
  methods: {
    // 获取备注(评论)组件数据
    async getData() {
      const response = await this.$http.get('http://localhost:8888/api/private/v1/users/getUsersList')
      const { data, meta } = response.data
      if (meta.status === 200) {
        this.usersList = data.users
      }
    }
  }
}
</script>
