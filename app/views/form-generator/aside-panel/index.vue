<template>
  <el-card class="aside-layout">
    <label for="aside-layout" class="aside-layout__label">选择布局</label>
    <el-select v-model="activeLayout" placeholder="请选择" @change="handleChangeLayout">
      <el-option
        v-for="(layout, index) in rowLayouts"
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
    <div class="aside-layout__colitems-wrap">
      <draggable
        v-model="colitemsGroup"
        class="aside-layout__colitems-group"
        tag="ul"
        :move="checkMove"
        v-bind="dragOptions"
        @start="dragging = true"
        @end="dragging = false"
      >
        <transition-group type="transition" :name="!dragging ? 'flip-list' : null">
          <li
            class="aside-layout__colitem"
            v-for="(element, idx) in colitemsGroup"
            :key="element.prop"
          >
            <span>{{ element.prop }}</span>
            <div class="colitem-icon colitem-icon--delete" @click="handleRemoveColumn(element, idx)">
              <svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision">
                <g><path d="M19 9h-3V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H9a1 1 0 1 0 0 2h10a1 1 0 0 0 .004-2H19zM9 20c.021.543.457.979 1 1h8c.55-.004.996-.45 1-1v-7H9v7zm2.02-4.985h2v4h-2v-4zm4 0h2v4h-2v-4z" fill-rule="evenodd"></path></g>
              </svg>
            </div>
          </li>
        </transition-group>
        <div
          slot="footer"
          class="aside-layout__colitem-action"
          role="group"
          key="footer"
        >
          <div class="colitem-action__btn">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="handleAddColumn" circle></el-button>
          </div>
          <div class="colitem-action__label"><span>新增列</span></div>
        </div>
      </draggable>
    </div>
  </el-card>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  name: 'AsidePanel',
  components: {
    Draggable
  },
  inject: ['fg'],
  data () {
    return {
      // aside
      activeSection: 0,
      activeLayout: [],
      layouts: [
        {
          idx: 0,
          span: [24]
        },
        {
          idx: 1,
          span: [12, 12]
        }
      ],
      rowLayouts: [
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
      dragging: false,
      dragOptions: {
        animation: 200,
        group: 'colitem',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  computed: {
    colitemsGroup: {
      get  () {
        return this.fg.layoutSections[this.activeSection]
      },
      set (val) {
        this.fg.layoutSections.splice(this.activeSection, 1, val)
      }
    }
  },
  methods: {
    getRectWidth (item) {
      const len = item.length
      return (100 - len * 3) / len
    },
    handleChangeLayout (data) {
      const initVal = data.map((val, idx) => {
        return {
          colGrid: { span: val },
          isCustom: 'btn-addCol'
        }
      })
      this.fg.layoutSections.push(initVal)
    },
    checkMove (e) {
      console.log('Future index: ' + e.draggedContext.futureIndex)
    },
    handleAddColumn () {
      // TODO 处理添加列业务逻辑
      console.log('add column')
    },
    handleRemoveColumn (element, colIndex) {
      const oldSection = {
        isCustom: 'btn-addCol',
        colGrid: element.colGrid
      }
      this.fg.layoutSections[this.activeSection].splice(colIndex, 1, oldSection)
    }
  }
}
</script>

<style lang="less" scoped>
.aside-layout {
  height: 800px;
  &__label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }
  &__colitems-wrap {
    margin-top: 20px;
  }
  &__colitem {
    cursor: move;
    list-style: none;
    background: #f1f5f9;
    font-size: 13px;
    // min-height: 40px;
    font-weight: 600;
    color: #32373c;
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 10px;
    position: relative;
    text-align: center;
    line-height: 1.5em;
    .colitem-icon {
      display: inline-block;
      position: absolute;
      right: 16px;
      transition: fill .2s ease;
      cursor: pointer;
    }
    .colitem-icon--delete {
      fill: #737e89;
      width: 28px;
      min-width: 28px;
      height: 28px;
      margin: -6px;
    }
  }
  &__colitem-action {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    align-items: center;
    .colitem-action__label {
      padding: 8px 16px;
    }
  }
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
