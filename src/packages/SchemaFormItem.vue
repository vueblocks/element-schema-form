<template>
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

<script>
export default {
  props: {
    module: { // 绑定的value值
      type: Object
    },
    options: { // 多选值绑定的陪选项目
      type: Object
    },
    col: {
      type: Object
    }
  },
  data () {
    return {
      builtInNames: ['input', 'select', 'radio', 'datepicker',
        'cascader', 'placeholder', 'checkbox', 'slider', 'timeselect', 'jsoneditor', 'quill', 'codemirror',
        'rate', 'switch', 'colorpicker', 'tags', 'progress']
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

<style lang="scss" scoped>

</style>
