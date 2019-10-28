<template>
  <el-dialog
    v-if="fg.showVueCode"
    title="Vue Code"
    width="50%"
    class="form-generator__dialog"
    :visible.sync="fg.showVueCode"
    :before-close="handleClose">
    <codemirror v-model="vueCode" :options="cmOptions" />
    <div solt="footer" class="form-generator__dialog--footer">
      <el-button type="primary" icon="el-icon-copy" @click="handleCopyCode">复制代码</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
import 'codemirror/theme/material.css'

import { getVueCode } from '@/utils/codeFormatter'

export default {
  name: 'VueCode',
  components: {
    codemirror
  },
  inject: ['fg'],
  props: {
    formSettings: {
      type: Object,
      default: () => {}
    },
    layout: {
      type: Object,
      default: () => {}
    },
    model: {
      type: Object,
      default: () => {}
    },
    schema: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      cmOptions: {
        tabSize: 2,
        lineNumbers: true,
        line: true,
        readOnly: 'nocursor',
        theme: 'material'
      }
    }
  },
  computed: {
    vueCode () {
      const vueCode = getVueCode({
        formSettings: this.formSettings,
        layout: this.layout,
        model: this.model,
        schema: this.schema,
        options: this.options
      })
      return vueCode
    }
  },
  methods: {
    handleClose (done) {
      this.fg.showSchemaCode = false
      done()
    },
    handleCopyCode () {
      const self = this
      this.$copyText(this.vueCode).then(function (e) {
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
.CodeMirror {
  min-height: 480px;
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
