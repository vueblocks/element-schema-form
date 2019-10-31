<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <el-form-item label="活动名称" slot="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
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
        [{ slot: 'name' }]
      ]
    }
  }
}
</script>

<style scoped>

</style>
