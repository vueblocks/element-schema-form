<template>
  <div
    class="schema-form-json-editor"
    :style="{width: width, height: height}"
    ref="jsonEditor"
  >
  </div>
</template>

<script>

import FormMixin from '../mixins/form-mixin'
import FormJsonEditorMixin from '../mixins/form-json-editor-mixin'

import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js'
import 'jsoneditor/dist/jsoneditor.min.css'

export default {
  name: 'SchemaFormJsoneditor',
  mixins: [FormMixin, FormJsonEditorMixin],
  data () {
    return {
      jsonEditor: null
    }
  },
  watch: {
    mode (val) {
      if (val) this.jsonEditor.setMode(val)
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.clearInstance()
  },
  methods: {
    init () {
      let _container = this.$refs.jsonEditor
      let _option = {
        onChange: this.onChange,
        mode: this.mode,
        ...this.editorOptions
      }
      this.jsonEditor = new JSONEditor(_container, _option)
      this.jsonEditor.set(this.bindVal || {})
      this.$emit('change', { prop: this.prop, value: this.bindVal, instance: this.jsonEditor })
    },
    onChange () {
      try {
        let _value = this.jsonEditor.get()
        this.bindVal = { ..._value }
        this.$emit('change', { prop: this.prop, value: this.bindVal, instance: this.jsonEditor })
      } catch {
      }
    },
    clearInstance () {
      if (this.jsonEditor) {
        this.jsonEditor.destroy()
        this.jsonEditor = null
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
