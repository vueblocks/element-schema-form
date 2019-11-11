<template>
   <el-form label-width="80px">
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
      model: {
        name: '',
        editable: true
      }
    }
  },
  computed: {
    schema () {
      return [
        [
          {
            type: 'switch',
            prop: 'editable',
            formItem: { label: '可编辑' }
          }
        ],
        [
          {
            type: 'input',
            prop: 'name',
            formItem: { label: '姓名' },
            dynamicAttrs: { disabled: !this.model.editable }
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>

</style>
