<template>
  <el-date-picker
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-date-picker>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormDatepicker',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
