<template>
  <el-form size="small" label-position="left" label-width="90px" class="slot-tool">
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
        name: ''
      },
      schema: [
        [
          {
            type: 'input',
            prop: 'name',
            frontHtml: '<span><i class="el-icon-warning" />近</span>',
            formItem: { label: '店铺年龄' },
            rearHtml: '天'
          }
        ]
      ]
    }
  }
}
</script>

<style >
.slot-tool  .el-input {
  width: auto;
}
</style>
