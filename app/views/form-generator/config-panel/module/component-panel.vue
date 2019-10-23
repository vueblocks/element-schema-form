<template>
  <section class="component-panel">
    <!-- 通用设置 -->
    <fieldset class="component-panel__fieldset">
      <figcaption class="component-panel__figcaption">
        <span>通用属性</span>
      </figcaption>
        <label-layout title="标签名称:">
          <el-input v-model="editInfo.formItem.label"></el-input>
        </label-layout>
        <label-layout title="数据字段:">
          <el-input v-model="editInfo.prop"></el-input>
        </label-layout>
        <label-layout title="栅格数:">
          <el-input v-model.number="editInfo.colGrid.span"></el-input>
        </label-layout>
    </fieldset>
    <!-- 定制属性 -->
    <fieldset class="component-panel__fieldset">
      <figcaption class="component-panel__figcaption">
        <span>私有属性</span>
      </figcaption>
    </fieldset>
    <el-button type="primary" @click="onConfirm" :disabled="!editInfo.prop">确定</el-button>
  </section>
</template>

<script>

import cloneDeep from 'lodash.clonedeep'
import LabelLayout from './label-layout'

export default {
  components: {
    LabelLayout
  },
  props: {
    editProp: {
      type: String
    }
  },
  data () {
    return {
      lastProp: '', // 编辑前prop信息
      editInfo: {
        formItem: {},
        colGrid: {}
      }
    }
  },
  watch: {
    editProp (str) {
      if (!str) {
        this.reset()
        return
      }
      this.lastProp = str
      let _allSchema = this.$store.state.layoutSections.reduce((arr, list) => { return [...arr, ...list] }, [])
      let _cur = _allSchema.find(item => item.prop === str)
      this.editInfo = cloneDeep(_cur) || {}
    }
  },
  methods: {
    onConfirm () {
      if (!this.validateEdit()) return
      if (this.editInfo.prop !== this.lastProp) {
        this.$store.dispatch('changeModelAndOption', { oldProp: this.lastProp, newProp: this.editInfo.prop })
      }
      // 替换schema
      let _newVal = this.$store.state.layoutSections.map(list => {
        return list.map(item => {
          if (item.prop === this.lastProp) {
            return cloneDeep(this.editInfo)
          }
          return item
        })
      })
      this.$store.commit('UPDATE_LAYOUT_SECTIONS', _newVal)
      this.$message.success('设置成功')
      this.reset()
    },
    validateEdit () {
      if (this.editInfo.prop !== this.lastProp && this.$store.state.formModel.hasOwnProperty(this.editInfo.prop)) {
        this.$message.error('数据字段已存在，请重新编辑数据字段')
        return false
      }
      return true
    },
    reset () {
      this.lastProp = ''
      this.editInfo = {
        formItem: {},
        colGrid: {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.component-panel {
  &__figcaption {
    box-sizing: content-box;
    font-size: 14px;
    margin-bottom: 15px;
    padding: 8px 0;
    border-bottom: 1px solid #EBEEF5;
    font-weight: 600;
  }
}
</style>
