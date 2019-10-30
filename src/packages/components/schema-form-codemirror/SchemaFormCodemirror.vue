<template>
  <codemirror
    v-model="bindVal"
    v-on="onEvents"
    :options="cmOptions"
    ref="myCm"
  />

</template>

<script>
import { codemirror } from 'vue-codemirror-lite'

import FormMixin from '../../mixins/form-mixin'
import FormCodeMirrorMixin from '../../mixins/form-code-mirror-mixin'

export default {
  name: 'SchemaFormCodemirror',
  mixins: [FormMixin, FormCodeMirrorMixin],
  components: {
    codemirror
  }
}
</script>

<style lang="less" scoped>

</style>
