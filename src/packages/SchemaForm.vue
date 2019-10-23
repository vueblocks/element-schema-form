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
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <schema-form-item
              v-bind="col.formItem"
              :prop="col.prop"
              :col="col"
              :module="module"
              :options="options"
              v-on="$listeners"
            />
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import LayoutMixin from './mixins/layout-mixin'
import SchemaFormItem from './SchemaFormItem'

export default {
  name: 'SchemaForm',
  mixins: [LayoutMixin],
  components: {
    SchemaFormItem
  },
  mounted () {
    console.log(this.$slots)
  }
}
</script>

<style lang="less">

</style>
