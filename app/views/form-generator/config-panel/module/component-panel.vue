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
      <!-- 私有属性配置 -->
      <div v-for="(info, key) in config" :key="key">
        <label-layout
          :title="info.label"
          v-if="calcVisible(info)"
        >
          <el-select v-if="info.type === 'select'" v-model="info.value" clearable>
            <el-option
              v-for="item in info.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-if="info.type === 'string'" v-model="info.value" clearable></el-input>
          <el-input-number v-if="info.type === 'number'" v-model="info.value"></el-input-number>
          <el-switch v-if="info.type === 'boolean'" v-model="info.value"></el-switch>
        </label-layout>
      </div>
    </fieldset>
    <el-button type="primary" @click="onConfirm" :disabled="!editInfo.prop">确定</el-button>
  </section>
</template>

<script>

import cloneDeep from 'lodash.clonedeep'
import LabelLayout from './label-layout'

import { formatConfig } from '@/utils/configFormatter.js'

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
      },
      config: {}
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
      if (!_cur) return
      this.editInfo = cloneDeep(_cur) || {}
      this.config = cloneDeep(formatConfig(_cur.type, _cur.attrs || {}))
    }
  },
  methods: {
    onConfirm () {
      if (!this.validateEdit()) return
      if (this.editInfo.prop !== this.lastProp) {
        this.$store.dispatch('changeModelAndOption', { oldProp: this.lastProp, newProp: this.editInfo.prop })
      }
      // 添加attrs
      let _attrs = {}
      for (let key in this.config) {
        let _cur = this.config[key]
        if (_cur.default !== _cur.value) {
          if (_cur.associate) { // 排除有关联的属性
            if (Array.isArray(_cur.associateVal)) {
              if (!_cur.associateVal.includes(this.config[_cur.associate].value)) continue
            } else { if (this.config[_cur.associate].value !== _cur.associateVal) continue }
          }
          _attrs[key] = _cur.value
        }
      }
      if (Object.keys(_attrs).length || this.editInfo.hasOwnProperty('attrs')) {
        if (!Object.keys(_attrs).length) this.$delete(this.editInfo, 'attrs')
        else this.editInfo = { ...this.editInfo, attrs: _attrs }
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
      // this.reset()
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
      this.config = {}
    },
    calcVisible (info) {
      if (info.associate) {
        if (Array.isArray(info.associateVal)) return info.associateVal.includes(this.config[info.associate].value)
        else return info.associateVal === this.config[info.associate].value
      }
      return true
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
