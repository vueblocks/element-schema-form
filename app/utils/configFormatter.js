import { BASIC_COMPONENTS } from '@/constant/formGenerator.js'
import { paramsAttr } from '@/constant/paramsAttr.js'

/**
 * @description: 获取config
 * @param type 组件类型
 * @param origin 组件attrs
 * @return: {     enabled: false, label: '占位符', type: 'string', value: '', options: []}
 */
export const formatConfig = (compType, origin) => {
  let result = {}
  let _attrs = BASIC_COMPONENTS.find(item => item.type === compType).attrs || []
  _attrs.forEach(parmas => {
    let _detail = paramsAttr[parmas]
    if (!_detail) return
    if (parmas.includes('*')) parmas = parmas.replace(/^\*\w+-/, '')
    let basicParams = {
      label: _detail.label,
      type: _detail.type,
      value: origin.hasOwnProperty(parmas) ? origin[parmas] : _detail.value,
      default: _detail.default
    }
    if (_detail.options) Object.assign(basicParams, { options: _detail.options })
    if (_detail.associate) Object.assign(basicParams, { associate: _detail.associate })
    if (_detail.associateVal) Object.assign(basicParams, { associateVal: _detail.associateVal })
    result[parmas] = basicParams
  })
  return result
}
