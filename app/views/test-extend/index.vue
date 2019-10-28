<template>
  <div class="page-form">
    <el-form :model="model" label-position="top">
      <schema-form
        :model="model"
        :schema="formSchema"
        :options="options"
        ref="schemaForm"
        @change="onChange"
      >
        <el-button type="primary" class="btn" slot="json" @click="onPreview">预览</el-button>
      </schema-form>
    </el-form>
  </div>
</template>

<script>
import { model, schema, options } from './const.js'

export default {
  name: 'TestPage',
  data () {
    return {
      model,
      options,
      schema,
      mode: 'code'
    }
  },
  computed: {
    formSchema () {
      return this.schema.map(list => {
        return list.map(item => {
          if (item.prop === 'json') {
            return { ...item,
              dynamicAttrs: {
                mode: this.mode,
                options: { onError: this.onError, onValidate: this.onValidate } }
            }
          }
          if (item.prop === 'quill') return { ...item, on: { focus: this.onFocus } }
          if (item.prop === 'code') return { ...item, on: { blur: this.onBlur } }
          return item
        })
      })
    }
  },
  methods: {
    onPreview () {
      this.mode = this.mode === 'code' ? 'preview' : 'code'
    },
    onError (err) {
      console.log('err: ', err)
    },
    onValidate (json) {
      var errors = []
      if (json && json.customer && !json.customer.address) {
        errors.push({
          path: ['customer'],
          message: 'Required property "address" missing.'
        })
      }
      return errors
    },
    onChange ({ instance }) { // json 实例
      console.log('json编辑器instance: ', instance)
    },
    onFocus (quill) { // 富文本编辑器实例
      console.log('quill编辑器instance ', quill)
    },
    onBlur (code) {
      console.log('codeMirror编辑器instance ', code)
    }
  }
}
</script>

<style lang="less" scoped>
.page-form{
  .btn{
    margin-bottom:25px;
  }
}
</style>
