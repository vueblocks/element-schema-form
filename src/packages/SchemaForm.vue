<template>
  <div class="schema-form">
    <el-row
      class="schema-form__row"
      v-bind="layout"
      v-for="(row, rowIndex) in formatedSchema"
      :key="rowIndex"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" v-if="!col.hide" :key="colIndex">
          <slot :col="col" :rowIndex="rowIndex" :colIndex="colIndex"></slot>
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <el-form-item :prop="col.prop" v-bind="col.formItem">
              <slot :name="col.frontSlot" v-if="col.frontSlot"></slot>
              <component
                v-bind="col.attrs"
                v-on="$listeners"
                :is="getComponentName(col.type)"
                :prop="col.prop"
                :value.sync="module[col.prop]"
                :modifier="col.modifier"
                :dynamicAttrs="col.dynamicAttrs"
                :onEvents="col.on"
                :options="options[col.prop]"
              />
              <slot :name="col.rearSlot" v-if="col.rearSlot"></slot>
            </el-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import LayoutMixin from './mixins/layout-mixin'

export default {
  name: 'SchemaForm',
  mixins: [LayoutMixin],
  props: {
    layout: { // 关于el-row 的拓展
      type: Object,
      default () { return {} }
    },
    schema: { // 表单的格局
      type: Array,
      required: true,
      validator (val) {
        return val.every(arr => Array.isArray(arr) && arr.length > 0)
      }
    },
    module: { // 绑定的value值
      type: Object,
      required: true,
      default () { return {} }
    },
    options: { // 多选值绑定的陪选项目
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      builtInNames: ['input', 'select', 'radio', 'datepicker',
        'cascader', 'placeholder', 'checkbox', 'slider', 'timeselect', 'jsoneditor', 'quill', 'codemirror',
        'rate', 'switch', 'colorpicker', 'tags', 'progress']
    }
  },
  mounted () {
    console.log(this.$slots)
  },
  methods: {
    // 组件名称
    getComponentName (type) {
      if (this.builtInNames.includes(type)) {
        // 内置组件
        return 'schema-form-' + type
      } else {
        // 外部组件
        return type
      }
    }
  }
}
</script>

<style lang="less">
.schema-form{
  .el-select{
    width: 100%;
  }
  .el-date-editor{
    width: 100%;
  }
  .el-cascader{
    width: 100%;
  }
}
</style>
