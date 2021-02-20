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
              :model="model"
              :options="options"
              v-on="$listeners"
            >
              <slot v-if="col.labelSlot" :name="col.labelSlot" :slot="col.labelSlot"></slot>
              <slot v-if="col.frontSlot" :name="col.frontSlot" :slot="col.frontSlot"></slot>
              <slot v-if="col.rearSlot" :name="col.rearSlot" :slot="col.rearSlot"></slot>
            </schema-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import LayoutMixin from './mixins/layout-mixin'
import SchemaFormItem from './SchemaFormItem.vue'

export default {
  name: 'SchemaForm',
  mixins: [LayoutMixin],
  components: {
    SchemaFormItem
  },
  mounted () {
    // console.log(this.$slots)
  }
}
</script>

<style lang="less">

</style>
