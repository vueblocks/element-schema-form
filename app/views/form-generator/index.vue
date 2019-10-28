<template>
  <div class="form-generator">
    <aside class="form-generator__aside">
      <aside-panel />
    </aside>
    <main class="form-generator__main">
      <el-card class="main-layout" @click.native.self="onResetActive" shadow="never">
        <div slot="header" class="main-layout__header clearfix">
          <div class="">表单配置</div>
          <div class="main-layout__header--action">
            <el-button type="warning" size="mini" @click="showSchemaCode = true">生成 Schema</el-button>
            <el-button type="danger" size="mini" @click="showVueCode = true">生成 Vue 代码</el-button>
            <el-button type="success" size="mini"  @click="showResult = true">预览表单</el-button>
          </div>
        </div>
        <el-form
          :model="formModel"
          :label-position="formSettings.labelPosition"
          :size="formSettings.size"
          :label-width="formSettings.labelWidth">
          <main-panel
            :model="formModel"
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
          ref="configPanel"
        />
      </el-card>
    </section>
    <!-- 生成 Schema Code 代码 Dialog -->
    <schema-code :code="layoutSections" />
    <!-- 生成 Vue Code 代码 Dialog -->
    <vue-code
      :formSettings="formSettings"
      :layout="formLayout"
      :model="formModel"
      :schema="layoutSections"
      :options="formOptions"
    />
    <!-- 预览表单 -->
    <PreviewForm
      :formSettings="formSettings"
      :layout="formLayout"
      :model="formModel"
      :schema="layoutSections"
      :options="formOptions"
    />
  </div>
</template>

<script>
import AsidePanel from './aside-panel'
import ConfigPanel from './config-panel'
import MainPanel from './main-panel'
import SchemaCode from './dialog/SchemaCode'
import VueCode from './dialog/VueCode'
import PreviewForm from './dialog/PreviewForm'

import { BASIC_COMPONENTS } from '@/constant/formGenerator'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'FormGenerator',
  components: {
    AsidePanel,
    ConfigPanel,
    MainPanel,
    SchemaCode,
    VueCode,
    PreviewForm
  },
  provide () {
    return {
      fg: this
    }
  },
  data () {
    return {
      basicComponents: BASIC_COMPONENTS,
      orderRecord: 0, // 每次生成向上迭代
      showSchemaCode: false,
      showVueCode: false,
      showResult: false
    }
  },
  computed: {
    ...mapState([
      'layoutSections',
      'formModel',
      'formOptions',
      'formLayout',
      'formSettings',
      'formControl',
      'activeSection',
      'activeProp'
    ])
  },
  methods: {
    ...mapActions([
      'addComponent'
    ]),
    handleAddComponent (comp, scope) {
      const { rowIndex, colIndex } = scope
      this.addComponent({ comp, rowIndex, colIndex })
    },
    changActiveRow (rowIndex) {
      this.$store.commit('UPDATE_ACTIVE_PROP', '')
      this.$store.commit('UPDATE_ACTIVE_SECTION', rowIndex)
    },
    changeActiveProp (prop) {
      this.$store.commit('UPDATE_ACTIVE_PROP', prop)
    },
    onResetActive () {
      this.$store.commit('UPDATE_ACTIVE_PROP', '')
      this.$store.commit('UPDATE_ACTIVE_SECTION', -1)
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
      border: 1px solid @primary;
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
