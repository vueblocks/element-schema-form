<template>
  <el-time-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-time-select>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormTimeselect',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
