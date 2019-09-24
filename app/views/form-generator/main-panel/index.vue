<template>
  <div class="schema-form">
      <!-- 表单 -->
    <el-row
      v-bind="layout"
      type="flex"
      class="schema-form__row"
      v-for="(row, rowIndex) in formatedSchema"
      :class="{
        'schema-form__row--active': rowIndex === activeSection,
        'schema-form__row--grid': showGrid,
        'schema-form__row--layout': showLayout
      }"
      :key="rowIndex"
      @click.native.self="changActiveRow(rowIndex)"
    >
      <!-- 行蒙层 -->
      <section v-if="(showGrid && rowIndex === activeSection) || showLayout" class="schema-form__row__grid">
        <!-- 设置栅格 -->
        <grid-setting
          v-if="rowIndex === activeSection && showGrid"
          :activeRow="activeSection"
          :schema="formatedSchema"
        />
      </section>
      <template v-for="(col, colIndex) in row">
        <el-col
          v-bind="col.colGrid"
          v-if="!col.hide"
          :key="colIndex"
          :class="{'el-col--active': activeProp === col.prop}"
          @click.native="changeActiveProp(rowIndex, col)"
        >
          <!-- 遮罩当前组件 -->
          <div class="el-col__mask" v-if="col.prop && !canEdit"></div>
          <!-- 添加组件按钮 -->
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
  inject: ['fg'],
  components: {
    GridSetting
  },
  props: {
    activeSection: Number, // 激活行数
    activeProp: String
  },
  data () {
    return {
      canEdit: false // 是否开启编辑模式
    }
  },
  computed: {
    showGrid () { // 是否显示栅格
      return this.fg.formControl.showGrid
    },
    showLayout () { // 是否显示布局
      return this.fg.formControl.showLayout
    }
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
    &__grid{
      position: absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      background: rgba(0,0,0,.5);
      z-index:1120;
    }
    &--layout{
      margin-bottom:20px;
    }
    .el-col {
      padding: 18px 2px 0 ;
      transition: .33s all;
      position: relative;
      box-shadow: inset 0 0 0 2px transparent, 0 0 1px rgba(0, 0, 0, 0);
      &--active{
        box-shadow: inset 0 0 0 2px @pink, 0 0 1px rgba(0, 0, 0, 0);
      }
      &__mask{
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background: transparent;
        z-index: 111;
      }
    }
  }
  &__row--active{
    box-shadow: 0 0 10px @grey;
    .el-col {
      &:not(:last-child) {
        border-right: 1px dotted @grey;
      }
    }
  }
  &__row--active.schema-form__row--grid {
    .el-col {
      &--active{
        box-shadow: inset 0 0 0 2px transparent, 0 0 1px rgba(0, 0, 0, 0);
      }
      &:not(:last-child) {
        border-right: 1px dotted #000;
      }
    }
  }
}
</style>
