<template>
  <el-form size="small" label-position="left" label-width="90px" class="slot-tool">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <span slot="ageName">
        标签插槽
      </span>
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
            frontHtml: '近',
            labelSlot: 'ageName',
            formItem: { },
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
