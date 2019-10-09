<template>
  <section>
    <div class="row-select" v-if="type === 'deleteRow'">
      <el-button type="primary" size="mini" icon="el-icon-delete" circle @click="$emit('deleteRow')"></el-button>
      <div class="row-select__des">{{des}}</div>
    </div>
    <el-dropdown trigger="click" @command="handleCommand" v-else>
      <div class="row-select">
        <el-button type="primary" size="mini" :icon="type === 'addRow' ? 'el-icon-plus': 'el-icon-edit'" circle></el-button>
        <div class="row-select__des">{{des}}</div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <div style="overflow-y:auto;">
          <el-dropdown-item
            v-for="(layout, index) in activeRowLayouts"
            :key="index"
            :command="layout">
            <svg fill="#BEC9D6"  height="26">
              <template v-for="(item, idx) in layout">
                <rect
                  :key="idx"
                  :width="`${getRectWidth(layout, idx)}%`"
                  height="20"
                  y="5"
                  rx="5"
                  ry="5"
                  :x="`${getX(layout, idx)}%`"
                />
              </template>
            </svg>
          </el-dropdown-item>
        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
import isEqual from 'lodash.isequal'

const COL_SPAN = 24

export default {
  inject: ['fg'],
  props: {
    type: {
      type: String // addRow editRow deleteRow
    },
    activeLayOut: { // 当前活跃的状态
      type: Array
    }
  },
  data () {
    return {
      rowLayouts: [
        [24],
        [12, 12],
        [8, 8, 8],
        [6, 6, 6, 6],
        [5, 5, 4, 5, 5],
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
      ]
    }
  },
  computed: {
    des () {
      let _des = { addRow: '新增行', editRow: '编辑行', deleteRow: '删除行' }
      return _des[this.type]
    },
    activeRowLayouts () {
      if (!this.activeLayOut) return this.rowLayouts
      return this.rowLayouts.filter(item => !isEqual(item, this.activeLayOut))
    }
  },
  methods: {
    getRectWidth (layout, idx) {
      const len = layout.length
      const space = 100 - (len - 1) * 3

      const rect = layout[idx]
      const percent = rect * space / COL_SPAN

      return percent
    },
    getX (layout, idx) {
      if (idx === 0) return 0
      const len = layout.length
      const space = 100 - (len - 1) * 3

      const prevRectWidth = layout.slice(0, idx).reduce((a, b) => a + b)
      const percent = prevRectWidth * space / COL_SPAN

      const x = percent + idx * 3
      return x
    },
    handleCommand (data) {
      this.$emit('editRow', data)
    },
    onDelete () {
      console.log('执行')
    }
  }
}
</script>

<style lang="less" scoped>
.row-select{
  display: inline-block;
  text-align: center;
  padding: 0 5px;
  &__des{
    font-size:12px;
    margin-top:8px;
  }
}
</style>
