<template>
  <div class="deduction">
    <header>扣款明细</header>
    <main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="(item,index) in cols" :key="index" :label="item.col">
          <!-- 这一段 不写 也能动态生成, 但是 实际上, template 是更高级的用法 -->
          <template slot-scope="scope">
            <!-- {{scope.row[scope.column.property]}} -->
            <span>{{ scope.row[item.prop] }}</span>
            <!-- <span>{{ scope.row[scope.column.property] }}</span> -->
            <!-- 渲染对应表格里面的内容 -->
          </template>
        </el-table-column>
      </el-table>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Date: '2016-05-02',
          ExcelName: '王小虎',
          DataDetail: '588'
        },
        {
          Date: '2016-05-04',
          ExcelName: '张二',
          DataDetail: '16.38'
        },
        {
          Date: '2016-05-01',
          ExcelName: '李三',
          DataDetail: '599.6'
        }
      ],
      cols: [
        { col: '申报时间', prop: 'Date' },
        { col: '申报表名', prop: 'ExcelName' },
        { col: '应补退税额', prop: 'DataDetail' }
      ]
    }
  },
  created() {
    console.log(this.tableData)
    console.log(this.cols)
  },
  methods: {}
}
</script>
