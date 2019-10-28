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
  }
}
