<template>
  <vue-editor
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  />
</template>

<script>

import { VueEditor } from 'vue2-editor'

import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormQuill',
  mixins: [FormMixin],
  components: {
    VueEditor
  }
}
</script>

<style lang="less" scoped>

</style>
