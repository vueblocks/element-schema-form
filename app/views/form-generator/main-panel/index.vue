<template>
  <div class="schema-form">
    <el-row
      class="schema-form__row"
      v-bind="layout"
      v-for="(row, rowIndex) in formatedSchema"
      :class="{'schema-form__row--active': rowIndex === activeSection}"
      :key="rowIndex"
      @click.native.self="changActiveRow(rowIndex)"
    >
      <template v-for="(col, colIndex) in row">
        <el-col
          v-bind="col.colGrid"
          v-if="!col.hide"
          :key="colIndex"
          :class="{'el-col--active': activeProp === col.prop}"
          @click.native="changeActiveProp(rowIndex, col)"
        >
          <slot name="moduleEdit" :col="col" :rowIndex="rowIndex" :colIndex="colIndex"></slot>
          <!-- 具体组件的配置项目 -->
          <schema-form-item
            v-bind="col.formItem"
            :prop="col.prop"
            :col="col"
            :module="module"
            :options="options"
            v-on="$listeners"
          />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import { LayoutMixin } from '@lib/index.js'
export default {
  mixins: [LayoutMixin],
  props: {
    activeSection: Number, // 激活行数
    activeProp: String
  },
  methods: {
    changActiveRow (rowIndex) {
      this.$emit('changActiveRow', rowIndex)
    },
    async changeActiveProp (rowIndex, { prop }) {
      await this.$emit('changActiveRow', rowIndex)
      this.$emit('changeActiveProp', prop || '')
    }
  }
}
</script>
