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
        <div class="main-layout__section" v-for="(section, index) in layoutSections" :key="index">
          <div class="main-layout__section-row" v-for="(row, idx) in section" :key="row+idx">
            <el-popover
              placement="bottom"
              width="400"
              trigger="click">
              <ul class="component-basic">
                <li
                  v-for="comp in basicComponents"
                  class="component-basic__item"
                  :key="comp.type"
                  @click="handleAddComponent(comp, index)">
                  <span>{{comp.name}}</span>
                </li>
              </ul>
              <el-button type="primary" size="mini" icon="el-icon-plus" circle slot="reference" />
            </el-popover>
          </div>
        </div>
      </el-card>
    </main>
    <section class="form-generator__config-panel">
      <el-card class="config-panel-layout">
      </el-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FormGenerator',
  data () {
    return {
      activeLayout: [],
      layouts: [
        [24],
        [12, 12],
        [8, 8, 8],
        [6, 6, 6, 6],
        [4, 4, 4, 4, 4],
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
      ]
    }
  },
  methods: {
    getRectWidth (item) {
      const len = item.length
      return (100 - len * 3) / len
    },
    handleChangeLayout (val) {
      console.log(val)
      this.layoutSections.push(val)
    },
    handleAddComponent (comp, index) {
      this.layoutSections[index].push({

      })
    }
  }
}
</script>

<style lang="less">
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
    width: 66%;
    .main-layout {
      height: 800px;
      &__section {
        display: flex;
        justify-content: space-around;
        min-height: auto;
        box-sizing: content-box;
        padding: 20px 0;
        &:hover {
          margin: -2px;
          border: 2px solid #fa4;
          border-radius: 4px;
        }
      }
    }
  }
  &__config-panel {
    flex: 1;
    margin-left: 20px;
    .config-panel-layout {
      height: 800px;
    }
  }
}
</style>
