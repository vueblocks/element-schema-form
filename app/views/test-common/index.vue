<template>
  <div class="page-form">
    <el-form :model="model" label-width="80px">
      <schema-form
        :model="model"
        :schema="formSchema"
        :options="options"
      >
      </schema-form>
    </el-form>
    <div class="page-footer">
      <el-button type="primary" @click="handleAddRow">新增</el-button>
    </div>
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
      schema
    }
  },
  computed: {
    formSchema () {
      return this.schema.map(list => {
        return list.map(item => {
          if (item.prop === 'phone') return { ...item, on: { blur: this.onSelectBlur } }
          return item
        })
      })
    }
  },
  methods: {
    onSelectBlur (val) {
      console.log('val: ', val)
    },
    handleAddRow () {
      this.schema.push([{
        type: 'input',
        prop: 'phone',
        formItem: { label: '联系电话' },
        colGrid: { span: 8 }
      }])
    }
  }
}
</script>

<style lang="less" scoped>

</style>
