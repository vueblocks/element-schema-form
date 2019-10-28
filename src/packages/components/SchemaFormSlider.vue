<template>
  <el-slider
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  />
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormSlider',
  mixins: [FormMixin]
}
</script>

<style lang="less" scoped>

</style>
