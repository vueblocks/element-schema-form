import types from './mutation-types'
import Immutable from 'immutable'
import shortid from 'js-shortid'

export default {
  addRow ({ commit, state }, reload) {
    let { layoutSections } = state
    let _idx = layoutSections.length
    let _newLaypout = [...layoutSections, reload]
    commit(types.UPDATE_LAYOUT_SECTIONS, _newLaypout)
    commit(types.UPDATE_ACTIVE_SECTION, _idx)
    commit(types.UPDATE_ACTIVE_PROP, '')
  },
  copyRow ({ commit, state, getters }, reload) {
    let { layoutSections, activeSection, formModel, formOptions } = state
    let _list = Immutable.fromJS(layoutSections)
    let propList = []
    let result = getters.activeRow.map(item => {
      if (item.prop) {
        let _cur = { oldProp: item.prop, newProp: shortid.gen() }
        propList.push(_cur)
        return { ...item, prop: _cur.newProp }
      }
      return item
    })
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.insert(activeSection, result).toJS())
    let _form = Immutable.fromJS(formModel)
    let _option = Immutable.fromJS(formOptions)
    propList.forEach(({ oldProp, newProp }) => {
      if (_form.has(oldProp)) commit(types.UPDATE_FORM_MODEL, _form.set(newProp, _form.get(oldProp)).toJS())
      if (_option.has(oldProp)) commit(types.UPDATE_FORM_OPTIONS, _option.set(newProp, _option.get(oldProp)).toJS())
    })
    commit(types.UPDATE_ACTIVE_SECTION, activeSection + 1)
  },
  editRow ({ commit, state, getters, dispatch }, data) {
    if (!getters.activeRow.length) return
    let { layoutSections, activeSection } = state
    let result = data.map((grid, idx) => {
      let _cur = getters.activeRow[idx]
      if (_cur) return { ..._cur, colGrid: { span: grid } }
      return { colGrid: { span: grid }, isCustom: 'btn-addCol' }
    })
    // 删除冗余的prop
    if (data.length < getters.activeRow.length) {
      let _delPart = getters.activeRow.slice(data.length)
      _delPart.forEach(grid => {
        dispatch('delModelAndOption', grid.prop)
      })
    }
    let _list = Immutable.fromJS(layoutSections)
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.set(activeSection, result).toJS())
  },
  deleteRow ({ commit, state, getters, dispatch }, reload) {
    if (!getters.activeRow.length) return
    let { layoutSections, activeSection } = state

    getters.activeRow.forEach(item => {
      dispatch('delModelAndOption', item.prop)
    })
    let _list = Immutable.fromJS(layoutSections)
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.delete(activeSection).toJS())
    let _activeSection = activeSection === 0 ? 0 : activeSection - 1
    commit(types.UPDATE_ACTIVE_SECTION, _activeSection)
  },
  changeRow ({ commit, state }, newVal) {
    let { layoutSections, activeSection } = state
    let _list = Immutable.fromJS(layoutSections)
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.set(activeSection, newVal).toJS())
  },
  async delteColComp ({ commit, state, dispatch }, { colIndex, newVal, prop }) {
    let { layoutSections, activeSection } = state
    let _list = Immutable.fromJS(layoutSections)
    console.log(1)
    await dispatch('delModelAndOption', prop)
    console.log(3)
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.set(activeSection, _list.get(activeSection).set(colIndex, newVal)).toJS())
  },
  // 删除 formModel 和 formOptions 中的 prop
  delModelAndOption ({ commit, state }, prop) {
    return new Promise((resolve, reject) => {
      let { formModel, formOptions } = state
      let _form = Immutable.fromJS(formModel)
      let _option = Immutable.fromJS(formOptions)
      if (_form.has(prop)) {
        commit(types.UPDATE_FORM_MODEL, _form.delete(prop).toJS())
      }
      if (_option.has(prop)) {
        commit(types.UPDATE_FORM_OPTIONS, _option.delete(prop).toJS())
      }
      console.log(2)
      commit(types.UPDATE_ACTIVE_PROP, '')
      resolve()
    })
  },
  changeModelAndOption ({ commit, state }, { oldProp, newProp }) {
    let { formModel, formOptions } = state
    let _form = Immutable.fromJS(formModel)
    let _option = Immutable.fromJS(formOptions)
    if (_form.has(oldProp)) commit(types.UPDATE_FORM_MODEL, _form.set(newProp, _form.get(oldProp)).delete(oldProp).toJS())
    if (_option.has(oldProp)) commit(types.UPDATE_FORM_OPTIONS, _option.set(newProp, _option.get(oldProp)).delete(oldProp).toJS())
  },
  addComponent ({ commit, state }, { rowIndex, colIndex, comp }) {
    let { iterationIdx, layoutSections, formModel, formOptions } = state
    let _list = Immutable.fromJS(layoutSections)
    let _propIdx = iterationIdx + 1
    commit(types.UPDATE_ITERATION_IDX, _propIdx)

    let _component = {
      type: comp.type,
      prop: `default_${_propIdx}`,
      formItem: { label: 'label:' }
    }
    const oldVal = layoutSections[rowIndex][colIndex]
    let newVal = { ..._component, colGrid: oldVal.colGrid }
    commit(types.UPDATE_LAYOUT_SECTIONS, _list.set(rowIndex, _list.get(rowIndex).set(colIndex, newVal)).toJS())
    commit(types.UPDATE_FORM_MODEL, { ...formModel, [`default_${_propIdx}`]: comp.value })
    if (comp.needOption) {
      commit(types.UPDATE_FORM_OPTIONS, {
        ...formOptions,
        [`default_${_propIdx}`]: [
          { label: '选择A', value: 'A' },
          { label: '选择B', value: 'B' }
        ] })
    }
    commit(types.UPDATE_ACTIVE_PROP, `default_${_propIdx}`)
  }
}
