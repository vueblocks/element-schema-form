<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-option
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
    </el-option>
  </el-select>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormSelect',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
