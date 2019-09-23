<template>
  <div class="schema-form">
      <!-- 表单 -->
    <el-row
      v-bind="layout"
      type="flex"
      class="schema-form__row"
      v-for="(row, rowIndex) in formatedSchema"
      :class="{'schema-form__row--active': rowIndex === activeSection}"
      :key="rowIndex"
      @click.native.self="changActiveRow(rowIndex)"
    >
      <!-- 设置栅格 -->
      <grid-setting
        v-if="rowIndex === activeSection"
        :activeRow="activeSection"
        :schema="formatedSchema"
      />
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
import GridSetting from './module/grid-setting'

export default {
  mixins: [LayoutMixin],
  components: {
    GridSetting
  },
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

<style lang="less">
@yellow: #fa4;
@pink: #f4a;
@grey: #cfcbcb;
.schema-form {
  &__row{
    .el-col {
      padding: 10px;
      transition: .33s all;
      box-shadow: inset 0 0 0 2px transparent, 0 0 1px rgba(0, 0, 0, 0);
      &--active{
        box-shadow: inset 0 0 0 2px @pink, 0 0 1px rgba(0, 0, 0, 0);
      }
    }
  }
  &__row--active{
    box-shadow: 0 0 10px @grey;
    padding-top:20px;
    .el-col {
      &:not(:last-child) {
        border-right: 1px dotted @grey;
      }
    }
  }
}
</style>
