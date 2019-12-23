<template>
  <el-time-picker
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-time-picker>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormTimepicker',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
