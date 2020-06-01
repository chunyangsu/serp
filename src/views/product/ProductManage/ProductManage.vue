<template>
  <div>
    <!-- 搜索栏 -->
    <div>
      <el-button style="margin-right: 20px;" type="primary" size="mini" icon="el-icon-plus">添加</el-button>
    </div>
    <!-- 列表 -->
    <div>
      <el-table ref="proTable" :data="list" :tree-props="{children: 'children', hasChildren: 'hasChildren'}" default-expand-all row-key="id" size="mini" border style="width: 100%">
        <!-- 产品名称 -->
        <el-table-column label="产品名称" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <!-- 产品品牌 -->
        <el-table-column label="产品品牌" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.brand }}</span>
          </template>
        </el-table-column>
        <!-- 产品型号 -->
        <el-table-column label="型号" min-width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.model }}</span>
          </template>
        </el-table-column>
        <!-- 产品价格 -->
        <el-table-column label="产品价格" width="120">
          <template slot-scope="scope">
            <span :style="scope.row.style">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <!-- 产品备注 -->
        <el-table-column label="产品备注" width="150">
          <template slot-scope="scope">
            <span :style="scope.row.style">产品备注</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('http://localhost:8888/api/private/v1/products/getProductsList').then(res => {
        // console.log(res)
        // 获取属性和登录状态
        const { data, meta } = res.data
        if (meta.status === 200) {
          this.list = data.products
        }
      })
    }
  }
}
</script>

<style>
</style>
