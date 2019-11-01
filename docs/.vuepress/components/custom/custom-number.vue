
<template>
  <el-input-number 
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  ></el-input-number>
</template>

<script>

import { FormMixin } from '../../../../src/index'

export default {
  name: 'CustomNumber',
  mixins: [FormMixin]
}

</script>

<style scoped>

</style>