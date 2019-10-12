<template>
  <el-dialog
    v-if="fg.showSchemaCode"
    title="Schema Code"
    width="33%"
    class="form-generator__dialog"
    :visible.sync="fg.showSchemaCode"
    :before-close="handleClose">
    <json-viewer
      v-if="schemaCode"
      :value="schemaCode"
      :expand-depth="4"
    />
    <div solt="footer" class="form-generator__dialog--footer">
      <el-button type="primary" icon="el-icon-copy" @click="handleCopyCode">复制代码</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'SchemaCode',
  props: {
    code: [Object, Array]
  },
  inject: ['fg'],
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        lineNumbers: true,
        line: true
      }
    }
  },
  computed: {
    schemaCode () {
      return this.code
    }
  },
  methods: {
    handleClose (done) {
      this.fg.showSchemaCode = false
      done()
    },
    handleCopyCode () {
      const self = this
      this.$copyText(JSON.stringify(this.schemaCode)).then(function (e) {
        self.$message.success('已复制到剪切板')
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    }
  }
}
</script>

<style lang="less">
// 定制 dialog 样式
.form-generator__dialog {
  .el-dialog__header {
    padding: 12px 20px;
    background-color: #f8f8f8;
  }
  .el-dialog__headerbtn {
    top: 12px;
    right: 12px;
  }
  .el-dialog__body {
    padding: 20px;
  }
  .jv-container {
    font-size: 12px;
    max-height: 480px;
    overflow-y: auto;
  }
}
</style>

<style lang="less" scoped>
.form-generator__dialog {
  &--footer {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
