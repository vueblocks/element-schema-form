<template>
  <div class="form-generator">
    <aside class="form-generator__aside">
      <aside-panel @deleteComp="onDeleteComp"/>
    </aside>
    <main class="form-generator__main">
      <el-card class="main-layout">
        <el-form
          :model="formModel"
          :label-position="formSettings.labelPosition"
          :size="formSettings.size"
          label-width="80px">
          <schema-form
            :module="formModel"
            :schema="layoutSections"
            :options="formOptions"
            :layout="formLayout">
            <template #default="scope">
              <!-- 自定义 form item -->
              <div class="schema-form-item schema-form-item--custom">
                <el-popover
                  v-if="scope.col.isCustom === 'btn-addCol'"
                  placement="bottom"
                  width="400"
                  trigger="click">
                  <ul class="component-basic">
                    <li
                      v-for="comp in basicComponents"
                      class="component-basic__item"
                      :key="comp.type"
                      @click="handleAddComponent(comp, scope)">
                      <span>{{comp.name}}</span>
                    </li>
                  </ul>
                  <el-button type="primary" size="mini" icon="el-icon-plus" circle slot="reference"/>
                </el-popover>
                <template v-else>
                  <span class="btn-removeCol">
                    <el-button
                      type="primary"
                      size="mini"
                      icon="el-icon-delete"
                      circle
                      @click="handleRemoveComponent(scope)"
                    />
                    <el-button
                      type="primary"
                      size="mini"
                      icon="el-icon-edit"
                      circle
                      @click="handleEditComponent(scope)"
                    />
                  </span>
                </template>
              </div>
            </template>
          </schema-form>
        </el-form>
      </el-card>
    </main>
    <section class="form-generator__config-panel">
      <el-card class="config-panel-layout">
        <config-panel ref="configPanel"/>
      </el-card>
    </section>
  </div>
</template>

<script>
import AsidePanel from './aside-panel'
import ConfigPanel from './config-panel'
import { BASIC_COMPONENTS } from '@/constant/formGenerator'

export default {
  name: 'FormGenerator',
  components: {
    AsidePanel,
    ConfigPanel
  },
  provide () {
    return {
      fg: this
    }
  },
  data () {
    return {
      // main
      layoutSections: [],
      basicComponents: BASIC_COMPONENTS,
      formModel: {},
      formOptions: {},
      // 表单设置 - 栅格布局
      formLayout: {
        gutter: 16
      },
      // 表单设置 - 表单属性
      formSettings: {
        labelPosition: 'left',
        size: 'small'
      },
      orderRecord: 0 // 每次生成向上迭代
    }
  },
  methods: {
    handleAddComponent (comp, scope) {
      const { col, rowIndex, colIndex } = scope
      console.group('---- ---- ----')
      console.log(comp)
      console.log(col)
      console.log('row', rowIndex)
      console.log('col', colIndex)
      console.groupEnd()
      // 设定组件类型
      let _propIdx = this.orderRecord += 1
      let _component = {
        type: comp.type,
        prop: `default_${_propIdx}`,
        formItem: { label: 'label:' }
      }
      const oldSection = this.layoutSections[rowIndex][colIndex]
      const newSection = {
        ..._component,
        colGrid: oldSection.colGrid
      }
      this.layoutSections[rowIndex].splice(colIndex, 1, newSection)
      // 设置module
      this.$set(this.formModel, `default_${_propIdx}`, comp.value)
      // 设置option
      if (comp.needOption) {
        this.$set(this.formOptions, `default_${_propIdx}`, [
          { label: '选择A', value: 'A' },
          { label: '选择B', value: 'B' }
        ])
      }
      // 编辑弹窗
      this.onCompEdit(`default_${_propIdx}`)
    },
    handleRemoveComponent (scope) {
      const { col, rowIndex, colIndex } = scope
      const oldSection = {
        isCustom: 'btn-addCol',
        colGrid: col.colGrid
      }
      this.layoutSections[rowIndex].splice(colIndex, 1, oldSection)
      this.onCompEdit('')
    },
    handleEditComponent ({ col }) {
      this.onCompEdit(col.prop)
    },
    onDeleteComp () {
      this.onCompEdit('')
    },
    onCompEdit (prop) {
      this.$nextTick(() => {
        this.$refs.configPanel.editCompAttr(prop)
      })
    }
  }
}
</script>

<style lang="less">
@yellow: #fa4;
@pink: #f4a;

.component-basic {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__item {
    max-height: 80px;
    overflow: hidden;
    border: none!important;
    color: #4c5866;
    text-decoration: none;
    padding: 5px 15px;
    line-height: 2.35em;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    width: 45%;
    margin: 2.5%;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 600;
    background: #f1f5f9;
    border-radius: 3px;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
}
.form-generator {
  .schema-form {
    &__row.el-row {
      display: flex;
      align-items: center;
      margin: -2px;
      padding: 20px;
      transition-duration: .33s;
      transition-property: box-shadow;
      box-shadow:
        inset 0 0 0 2px transparent,
        0 0 1px rgba(0, 0, 0, 0);
      &:hover {
        box-shadow:
          inset 0 0 0 2px @yellow,
          0 0 1px rgba(0, 0, 0, 0);
      }
      .el-col {
        padding: 20px;
        transition: .33s all;
        box-shadow:
          inset 0 0 0 2px transparent,
          0 0 1px rgba(0, 0, 0, 0);
        &:hover {
          .btn-removeCol {
            display: block;
          }
          box-shadow:
            inset 0 0 0 2px @pink,
            0 0 1px rgba(0, 0, 0, 0);
        }
      }
    }
  }
  .schema-form-item--custom {
    .btn-removeCol {
      display: none;
      position: absolute;
      bottom: 7px;
    }
  }
  .schema-form-item--custom + .el-form-item {
    margin-bottom: 0;
  }
}
</style>

<style lang="less" scoped>
.form-generator {
  display: flex;
  width: 100%;
  &__aside {
    width: 240px;
  }
  &__main {
    margin-left: 20px;
    flex: 1;
    .main-layout {
      height: 800px;
      &__section {
        display: flex;
        justify-content: space-around;
        min-height: auto;
        box-sizing: content-box;
        padding: 20px 0;
        &.is-active,
        &:hover {
          margin: -2px;
          border: 2px solid #fa4;
          border-radius: 4px;
        }
      }
    }
    .schema-form-item--custom {
      display: flex;
      justify-content: center;
    }
  }
  &__config-panel {
    margin-left: 20px;
    width: 336px;
    .config-panel-layout {
      height: 800px;
    }
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
}
</style>
