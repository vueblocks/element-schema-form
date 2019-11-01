<template>
  <el-form>
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      model: { num: 1 },
      schema: [
        [
          {
            type: 'CustomNumber',
            prop: 'num',
            formItem: { label: '自定义组件' },
            attrs: { precision: 2, step: 0.1, max: 10 }
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>

</style>
