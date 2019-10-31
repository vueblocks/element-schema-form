<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <div slot="name" class="text-area">
        <span class="text-area__num">{{model.name.length}}</span>字
      </div>
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
            formItem: { label: '姓名' },
            rearSlot: 'name'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped>
.text-area{
  text-align: right;
}
.text-area__num{
  margin-right:5px;
}
</style>
