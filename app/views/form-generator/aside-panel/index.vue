<template>
  <el-card class="aside-layout" shadow="never">
    <div slot="header" class="aside-layout__header clearfix">
      <div style="line-height: 28px;">布局操作</div>
    </div>
    <section class="aside-layout__rowEdit">
      <row-select type="addRow" @editRow="onAddRow"/>
      <row-select type="editRow" :disabled="banEditOrDelete" :activeLayOut="activeLayOut" @editRow="onEditRow"/>
      <row-select type="deleteRow" :disabled="banEditOrDelete" @deleteRow="onDeleteRow"/>
    </section>
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
        <transition-group  type="transition" :name="!dragging ? 'flip-list' : null">
          <li
            class="aside-layout__colitem"
            v-for="(element, idx) in colitemsGroup"
            :key="element.prop || idx"
            :class="{'aside-layout__colitem--active': element.prop === activeProp}"
            @click.self="onEditComp(element.prop)"
          >
            <template v-if="element.prop">
              <span>{{ element.colGrid ? element.colGrid.span : '' }}</span>
              <span>{{ element.prop }}</span>
              <div class="colitem-icon colitem-icon--delete" @click="handleRemoveColumn(element, idx)">
                <svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision">
                  <g><path d="M19 9h-3V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H9a1 1 0 1 0 0 2h10a1 1 0 0 0 .004-2H19zM9 20c.021.543.457.979 1 1h8c.55-.004.996-.45 1-1v-7H9v7zm2.02-4.985h2v4h-2v-4zm4 0h2v4h-2v-4z" fill-rule="evenodd"></path></g>
                </svg>
              </div>
            </template>
            <template v-else>
              <span>{{ element.colGrid ? element.colGrid.span : '' }}</span>
            </template>
          </li>
        </transition-group>
      </draggable>
    </div>
  </el-card>
</template>

<script>

import Draggable from 'vuedraggable'
import RowSelect from './module/row-select'

import { mapActions } from 'vuex'

export default {
  name: 'AsidePanel',
  components: {
    Draggable,
    RowSelect
  },
  props: {
    activeSection: Number // 激活行index
  },
  data () {
    return {
      // aside
      activeLayout: [],
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
        return this.$store.getters.activeRow
      },
      set (val) {
        this.changeRow(val)
      }
    },
    activeLayOut () {
      return this.colitemsGroup.map(item => item.colGrid.span)
    },
    banEditOrDelete () {
      return !this.$store.getters.activeRow.length
    },
    activeProp () {
      return this.$store.state.activeProp
    }
  },
  methods: {
    ...mapActions([
      'addRow',
      'editRow',
      'deleteRow',
      'changeRow',
      'deleteColComp'
    ]),
    checkMove (e) {
      console.log('Future index: ' + e.draggedContext.futureIndex)
    },
    handleRemoveColumn (element, colIndex) {
      const oldSection = {
        isCustom: 'btn-addCol',
        colGrid: element.colGrid
      }
      this.deleteColComp({ colIndex, newVal: oldSection, prop: element.prop })
    },
    onAddRow (data) {
      const initVal = data.map((val, idx) => {
        return {
          colGrid: { span: val },
          isCustom: 'btn-addCol'
        }
      })
      this.addRow(initVal)
    },
    onEditRow (data) {
      this.editRow(data)
    },
    onDeleteRow () {
      this.deleteRow()
    },
    onEditComp (prop) {
      if (prop) this.$store.commit('UPDATE_ACTIVE_PROP', prop)
    }
  }
}
</script>

<style lang="less">
@primary: #7367f0;

.aside-layout {
  .el-card__header {
    background-color: @primary;
    padding: 6px 12px;
  }
}
</style>

<style lang="less" scoped>
@primary: #7367f0;
@grey: #cfcbcb;

.aside-layout {
  height: 100%;
  border: 1px solid @primary;
  &__header {
    font-size: 14px;
    color: #ffffff;
  }
  &__rowEdit {
    margin-bottom:12px;
    display: flex;
    justify-content: space-between;
    // & > *:not(:last-child){
    //   margin-right: 20px;
    // }
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
    display: flex;
    justify-content:space-between;
    line-height: 1.5em;
    &--active{
      border-right: 2px solid @primary;
      border-radius: 3px 0 0 3px;
    }
    .colitem-icon {
      display: inline-block;
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
