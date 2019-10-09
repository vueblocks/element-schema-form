<template>
  <div class="form-generator">
    <aside class="form-generator__aside">
      <aside-panel
        :activeSection.sync="activeSection"
        :activeProp="activeProp"
        @deleteComp="onDeleteComp"
        @editComp="onCompEdit"
      />
    </aside>
    <main class="form-generator__main">
      <el-card class="main-layout" @click.native.self="onResetActive" shadow="never">
        <div slot="header" class="main-layout__header clearfix">
          <div class="">表单配置</div>
          <div class="main-layout__header--action">
            <el-button type="warning" size="mini" @click="showSchemaCode = true">生成 Schema</el-button>
            <el-button type="danger" size="mini">生成代码</el-button>
            <el-button type="success" size="mini">预览表单</el-button>
          </div>
        </div>
        <el-form
          :model="formModel"
          :label-position="formSettings.labelPosition"
          :size="formSettings.size"
          :label-width="formSettings.labelWidth">
          <main-panel
            :module="formModel"
            :schema="layoutSections"
            :options="formOptions"
            :layout="formLayout"
            :activeSection="activeSection"
            :activeProp="activeProp"
            @changActiveRow="changActiveRow"
            @changeActiveProp="changeActiveProp"
          >
            <template #moduleEdit="scope">
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
              </div>
            </template>
          </main-panel>
        </el-form>
      </el-card>
    </main>
    <section class="form-generator__config-panel">
      <el-card class="config-panel-layout" shadow="never">
        <config-panel
          :activeProp="activeProp"
          @clearProp="onClearProp"
          ref="configPanel"/>
      </el-card>
    </section>
    <schema-code :code="layoutSections" />
  </div>
</template>

<script>
import AsidePanel from './aside-panel'
import ConfigPanel from './config-panel'
import MainPanel from './main-panel'
import SchemaCode from './dialog/SchemaCode'
import { BASIC_COMPONENTS } from '@/constant/formGenerator'

export default {
  name: 'FormGenerator',
  components: {
    AsidePanel,
    ConfigPanel,
    MainPanel,
    SchemaCode
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
        gutter: 0,
        justify: 'start'
      },
      // 表单设置 - 表单属性
      formSettings: {
        labelPosition: 'left',
        size: 'small',
        labelWidth: '80px'
      },
      formControl: {
        showGrid: false,
        showLayout: false
      },
      orderRecord: 0, // 每次生成向上迭代
      activeSection: 0, // 激活的行数
      activeProp: '', // 激活的组件prop
      showSchemaCode: false
    }
  },
  methods: {
    handleAddComponent (comp, scope) {
      const { rowIndex, colIndex } = scope
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
    onDeleteComp (prop) {
      if (prop) {
        //  删除module
        if (prop && this.formModel.hasOwnProperty(prop)) this.$delete(this.formModel, prop)
        // 删除option
        if (prop && this.formOptions.hasOwnProperty(prop)) this.$delete(this.formOptions, prop)
      }
      this.onCompEdit('')
    },
    onCompEdit (prop) {
      this.$nextTick(() => {
        this.activeProp = prop
        // this.$refs.configPanel.editCompAttr(prop)
      })
    },
    changActiveRow (rowIndex) {
      this.activeSection = rowIndex
      this.onCompEdit('')
    },
    changeActiveProp (prop) {
      this.onCompEdit(prop)
    },
    onClearProp () {
      this.activeProp = ''
    },
    onResetActive () {
      this.activeProp = ''
    },
    handleBuildSchema () {
      console.log('dsds')
    }
  }
}
</script>

<style lang="less">
@primary: #7367f0;
@grey: #cfcbcb;

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
  &__main {
    .el-card__header {
      background-color: @primary;
      padding: 6px 12px;
    }
  }
  &__config-panel {
    .config-panel-layout {
      .el-card__body {
        padding: 0;
        .el-tabs__content {
          padding: 15px 20px;
        }
      }
    }
  }
}
</style>

<style lang="less" scoped>
@primary: #7367f0;

.form-generator {
  display: flex;
  width: 100%;
  height: 100%;
  &__aside {
    width: 240px;
  }
  &__main {
    margin-left: 20px;
    flex: 1;
    .main-layout {
      height: 100%;
      border: 1px solid @primary;
      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #ffffff;
      }
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
      height: 100%;
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
