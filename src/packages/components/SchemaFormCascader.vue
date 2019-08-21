<template>
  <el-cascader
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    :options="options"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-cascader>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormCascader',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
