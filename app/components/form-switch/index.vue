<template>
  <el-switch
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-switch>
</template>

<script>
import { FormMixin } from '../../../src/index.js'

export default {
  name: 'FormSwitch',
  mixins: [FormMixin]
}
</script>

<style lang="scss" scoped>

</style>
