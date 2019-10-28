<template>
  <el-checkbox-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-checkbox
      v-for="(option,idx) in options"
      :key="`${option.label}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >{{option.label}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormCheckbox',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
