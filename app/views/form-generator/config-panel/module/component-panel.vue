<template>
  <section class="component-panel">
    <!-- 通用设置 -->
    <fieldset class="component-panel__fieldset">
      <figcaption class="component-panel__figcaption">
        <span>通用属性</span>
      </figcaption>
      <figure class="component-panel__figure">
        <label class="figure-label">标签名称:</label>
        <div class="figure-control">
          <el-input v-model="editInfo.formItem.label"></el-input>
        </div>
      </figure>
      <figure class="component-panel__figure">
        <label class="figure-label">数据字段:</label>
        <div class="figure-control">
          <el-input v-model="editInfo.prop"></el-input>
        </div>
      </figure>
      <figure class="component-panel__figure">
        <label class="figure-label">栅格数:</label>
        <div class="figure-control">
          <el-input v-model.number="editInfo.colGrid.span"></el-input>
        </div>
      </figure>
    </fieldset>
    <el-button type="primary" @click="onConfirm" :disabled="!editInfo.prop">确定</el-button>
  </section>
</template>

<script>

import cloneDeep from 'lodash.clonedeep'

export default {
  inject: ['fg'],
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
      let _allSchema = this.fg.layoutSections.reduce((arr, list) => { return [...arr, ...list] }, [])
      let _cur = _allSchema.find(item => item.prop === str)
      this.editInfo = cloneDeep(_cur) || {}
    }
  },
  methods: {
    onConfirm () {
      if (!this.validateEdit()) return
      // 替换module
      if (this.editInfo.prop !== this.lastProp) {
        let _val = this.fg.formModel[this.lastProp]
        this.$delete(this.fg.formModel, this.lastProp)
        this.$set(this.fg.formModel, this.editInfo.prop, _val)
      }
      // 替换options
      if (this.editInfo.prop !== this.lastProp && this.fg.formOptions[this.lastProp]) {
        let _option = this.fg.formOptions[this.lastProp]
        this.$delete(this.fg.formOptions, this.lastProp)
        this.$set(this.fg.formOptions, this.editInfo.prop, _option)
      }
      // 替换schema
      let _newVal = this.fg.layoutSections.map(list => {
        return list.map(item => {
          if (item.prop === this.lastProp) {
            return cloneDeep(this.editInfo)
          }
          return item
        })
      })
      this.fg.layoutSections = _newVal
      this.$message.success('设置成功')
      this.reset()
    },
    validateEdit () {
      if (this.editInfo.prop !== this.lastProp && this.fg.formModel.hasOwnProperty(this.editInfo.prop)) {
        this.$message.error('数据字段已存在，请重新编辑数据字段')
        return false
      }
      return true
    },
    reset () {
      this.$emit('success')
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
  }
  &__figure {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    .figure-label {
      font-size: 12px;
      width:65px;
    }
    .figure-control {
      flex:1;
    }
  }
}
</style>
