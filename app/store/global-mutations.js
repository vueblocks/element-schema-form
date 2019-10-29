import types from './mutation-types'

export default {
  [types.UPDATE_LAYOUT_SECTIONS] (state, load) {
    state.layoutSections = load
  },
  [types.UPDATE_ACTIVE_SECTION] (state, load) {
    state.activeSection = load
  },
  [types.UPDATE_ACTIVE_PROP] (state, load) {
    state.activeProp = load
  },
  [types.UPDATE_FORM_MODEL] (state, load) {
    state.formModel = load
  },
  [types.UPDATE_FORM_MODEL] (state, load) {
    state.formModel = load
  },
  [types.UPDATE_FORM_OPTIONS] (state, load) {
    state.formOptions = load
  },
  [types.UPDATE_ITERATION_IDX] (state, load) {
    state.iterationIdx = load
  },
  [types.UPDATE_FORM_SETTING] (state, load) {
    state.formSettings = Object.assign(state.formSettings, load)
  },
  [types.UPDATE_FORM_LAYOUT] (state, load) {
    state.formLayout = Object.assign(state.formLayout, load)
  },
  [types.UPDATE_FORM_CONTROL] (state, load) {
    state.formControl = Object.assign(state.formControl, load)
  },
  [types.RESET_GLOBAL_STORE](state, load) {
    const originState = {
      iterationIdx: 0, // 迭代指针
      layoutSections: [], // schema 信息
      formModel: {},
      formOptions: {},
      formLayout: { // 表单布局
        gutter: 16,
        justify: 'start'
      },
      formSettings: { // 表单属性
        labelPosition: 'left',
        size: 'small',
        labelWidth: '80px'
      },
      formControl: { // 布局控制
        showGrid: false,
        showLayout: false
      },
      activeSection: 0, // 激活的行数
      activeProp: '' // 激活的组件prop
    }
    state = Object.assign(state, originState)
  }
}
