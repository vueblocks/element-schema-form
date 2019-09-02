<template>
  <div class="page-form">
    <el-form :model="module" label-position="top">
      <schema-form
        :module="module"
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
import { module, schema, options } from './const.js'

export default {
  name: 'TestPage',
  data () {
    return {
      module,
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
              dynamicAttrs: { mode: this.mode,
                options: {
                  onError: this.onError,
                  onValidate: this.onValidate
                } } }
          }
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
    onChange ({ instance }) {
      console.log('instance: ', instance)
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
