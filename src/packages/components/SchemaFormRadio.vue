<template>
  <el-radio-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-radio
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >
      {{option.label}}
    </el-radio>
  </el-radio-group>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormRadio',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
