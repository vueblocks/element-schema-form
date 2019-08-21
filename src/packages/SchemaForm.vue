<template>
  <div class="schema-form">
    <el-row
      class="schema-form__row"
      v-bind="layout"
      v-for="(row,idx) in formatedSchema"
      :key="idx"
    >
      <template v-for="(des, idx) in row">
        <el-col v-bind="des.colGrid" v-if="!des.hide" :key="idx">
          <slot v-if="des.slot" :name="des.slot"></slot>
          <template v-else>
            <el-form-item :prop="des.prop" v-bind="des.formItem">
              <slot :name="des.frontSlot" v-if="des.frontSlot"></slot>
              <component
                v-bind="des.attrs"
                v-on="$listeners"
                :is="getComponentName(des.type)"
                :prop="des.prop"
                :value.sync="module[des.prop]"
                :modifier="des.modifier"
                :dynamicAttrs="des.dynamicAttrs"
                :onEvents="des.on"
                :options="options[des.prop]"
              />
              <slot :name="des.rearSlot" v-if="des.rearSlot"></slot>
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
      builtInNames: ['input', 'select', 'radio', 'datepicker', 'cascader']
    }
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
