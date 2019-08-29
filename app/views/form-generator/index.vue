<template>
  <div class="form-generator">
    <aside class="form-generator__aside">
      <el-card class="aside-layout">
        <label for="aside-layout" class="aside-layout__label">选择布局</label>
        <el-select v-model="activeLayout" placeholder="请选择" @change="handleChangeLayout">
          <el-option
            v-for="(layout, index) in layouts"
            :key="index"
            :label="index+''"
            :value="layout">
            <svg fill="#BEC9D6">
              <template v-for="(item, idx) in layout">
                <rect
                  :key="idx"
                  :width="`${getRectWidth(layout)}%`"
                  height="20"
                  y="5"
                  rx="5"
                  ry="5"
                  :x="idx === 0 ? '0%' : `${(getRectWidth(layout) + 3) * idx}%`"
                />
              </template>
            </svg>
          </el-option>
        </el-select>
      </el-card>
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
              <div class="btn-addCol">
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
                <el-button
                  class="btn-removeCol"
                  type="primary"
                  size="mini"
                  icon="el-icon-close"
                  circle
                  @click="handleRemoveComponent(scope)"
                />
              </div>
            </template>
          </schema-form>
        </el-form>
      </el-card>
    </main>
    <section class="form-generator__config-panel">
      <el-card class="config-panel-layout">
        <config-panel />
      </el-card>
    </section>
  </div>
</template>

<script>
import ConfigPanel from './config-panel'

export default {
  name: 'FormGenerator',
  components: {
    ConfigPanel
  },
  provide () {
    return {
      fg: this
    }
  },
  data () {
    return {
      // aside
      activeLayout: [],
      layouts: [
        [24],
        [12, 12],
        [8, 8, 8],
        [6, 6, 6, 6],
        [5, 5, 5, 5, 5],
        [4, 4, 4, 4, 4, 4],
        [9, 15],
        [15, 9],
        [8, 16],
        [16, 8],
        [6, 18],
        [18, 6],
        [6, 12, 6],
        [4, 16, 4],
        [6, 6, 12],
        [12, 6, 6],
        [4, 4, 16],
        [16, 4, 4],
        [4, 4, 4, 12],
        [12, 4, 4, 4]
      ],
      // main
      layoutSections: [],
      basicComponents: [
        {
          type: 'input',
          name: '输入框'
        },
        {
          type: 'select',
          name: '选择框'
        },
        {
          type: 'radio',
          name: '单选按钮'
        },
        {
          type: 'datepicker',
          name: '日期控件'
        }
      ],
      formModel: {},
      formOptions: {},
      formLayout: {
        gutter: 16
      },
      formSettings: {
        labelPosition: 'left',
        size: 'small'
      }
    }
  },
  methods: {
    getRectWidth (item) {
      const len = item.length
      return (100 - len * 3) / len
    },
    handleChangeLayout (data) {
      console.log(data)
      console.log(this.$slots)
      const initVal = data.map((val, idx) => {
        return {
          colGrid: { span: val },
          isCustom: 'btn-addCol'
        }
      })
      this.layoutSections.push(initVal)
    },
    handleAddComponent (comp, scope) {
      const { col, rowIndex, colIndex } = scope
      console.group('---- ---- ----')
      console.log(comp)
      console.log(col)
      console.log('row', rowIndex)
      console.log('col', colIndex)
      console.groupEnd()
      const formater = [
        {
          type: 'input',
          prop: 'name',
          formItem: { label: 'Label' }
        },
        {
          type: 'select',
          prop: 'city',
          formItem: { label: '城市' }
        },
        {
          type: 'radio',
          prop: 'sex',
          formItem: { label: '性别' }
        },
        {
          type: 'datepicker',
          prop: 'expire',
          formItem: { label: '有效期' },
          attrs: {
            type: 'monthrange',
            'range-separator': '至',
            'start-placeholder': '开始月份',
            'end-placeholder': '结束月份'
          }
        }
      ]
      const component = formater.find(v => comp.type === v.type)
      const oldSection = this.layoutSections[rowIndex][colIndex]
      const newSection = {
        ...component,
        colGrid: oldSection.colGrid
      }
      this.layoutSections[rowIndex].splice(colIndex, 1, newSection)
      this.$set(this.formModel, 'name', '')
      this.$set(this.formModel, 'city', '')
      this.$set(this.formModel, 'sex', 'male')
      this.$set(this.formModel, 'expire', '')
      this.formOptions.city = [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' }
      ]
      this.formOptions.sex = [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
    },
    handleRemoveComponent (scope) {
      const { col, rowIndex, colIndex } = scope
      const oldSection = {
        isCustom: 'btn-addCol',
        colGrid: col.colGrid
      }
      this.layoutSections[rowIndex].splice(colIndex, 1, oldSection)
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
        // &:after {
        // }
      }
    }
  }
  .btn-addCol {
    .btn-removeCol {
      display: none;
      position: absolute;
      bottom: 7px;
    }
  }
  .btn-addCol + .el-form-item {
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
    .aside-layout {
      height: 800px;
      .aside-layout__label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
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
    .btn-addCol {
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
}
</style>
