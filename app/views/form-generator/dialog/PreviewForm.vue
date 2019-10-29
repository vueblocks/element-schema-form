<template>
  <div class="preview-result">
    <el-dialog
      v-if="fg.showResult"
      title="Preview Form"
      width="1200px"
      class="form-generator__dialog"
      :visible.sync="fg.showResult"
      :before-close="handleClose">
      <el-form
        :size="formSettings.size"
        :label-position="formSettings.labelPosition"
        :label-width="formSettings.labelWidth"
        :model="editModule">
        <schema-form
          :layout="layout"
          :model="editModule"
          :schema="schema"
          :options="options"
        >
        </schema-form>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'PreviewForm',
  inject: ['fg'],
  props: {
    formSettings: {
      type: Object,
      default: () => {}
    },
    layout: {
      type: Object,
      default: () => {}
    },
    model: {
      type: Object,
      default: () => {}
    },
    schema: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      editModule: {}
    }
  },
  watch: {
    'fg.showResult' (val) {
      if (val) {
        this.editModule = cloneDeep(this.model || {})
      }
    }
  },
  methods: {
    handleClose (done) {
      this.fg.showResult = false
      done()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
