<template>
  <div>
    <el-upload action="" :on-change="handleChange" :show-file-list="false" :on-remove="handleRemove" :file-list="fileListUpload" :limit="limitUpload" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" :auto-upload="false">
      <el-button size="small" type="primary">上传文件</el-button>
      <div slot="tip" class="el-upload__tip">注：只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
    <el-table :data="tableData" border size="mini" style="width: 100%">
      <el-table-column v-for="(col, index) in cols" :key="index" :label="col.label">
        <template slot-scope="scope">
          <span>{{ scope.row[col.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      limitUpload: 10,
      fileListUpload: [],
      tableData: [],
      cols: [
        // { prop: 'name', label: '姓名' },
        // { prop: 'age', label: '年龄' },
        // { prop: 'country', label: '国家' },
        // { prop: 'address', label: '地址' }
      ]
    }
  },
  methods: {
    // excel表上传
    handleChange(file, fileList) {
      this.fileTemp = file.raw
      // 判断上传文件格式
      if (this.fileTemp) {
        if ((this.fileTemp.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.fileTemp.type === 'application/vnd.ms-excel')) {
          this.importfxx(this.fileTemp)
        } else {
          this.$message({
            type: 'warning',
            message: '附件格式错误，请删除后重新上传！'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '请上传附件！'
        })
      }
    },
    // 移除excel表
    handleRemove(file, fileList) {
      this.fileTemp = null
    },
    importfxx(obj) {
      let _this = this
      // 通过DOM取文件数据
      this.file = obj
      var rABS = false // 是否将文件读取为二进制字符串
      var f = this.file
      var reader = new FileReader()
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var rABS = false // 是否将文件读取为二进制字符串
        // var pt = this
        var wb // 读取完成的数据
        var outdata
        var reader = new FileReader()
        reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result)
          // console.log(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          var XLSX = require('xlsx')
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), { // 手动转化
              type: 'base64'
            })
          } else {
            wb = XLSX.read(binary, {
              type: 'binary'
            })
          }
          // outdata就是读取excel内容之后输出的东西
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
          this.da = [...outdata]
          let arr = []
          console.log(this.da)
          this.da.map(val => {
            console.log(val)
            // let obj = {}
            // obj.name = v['姓名'] // 姓名
            // obj.age = v['年龄'] // 年龄
            // obj.country = v['国家'] // 国家
            // obj.address = v['地址'] // 地址
            // arr.push(obj)
          })
          _this.tableData = _this.tableData.concat(arr)
          // console.log(_this.tableData)
        }
        reader.readAsArrayBuffer(f)
      }
      if (rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    }
  }
}
</script>
