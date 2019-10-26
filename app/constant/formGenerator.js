const BASIC_COMPONENTS = [
  {
    type: 'input',
    name: '输入框',
    value: '',
    attrs: ['*input-type', 'rows', 'placeholder', 'prefix-icon', 'suffix-icon', 'clearable', 'disabled', 'show-password', 'show-word-limit', 'maxlength']
  },
  {
    type: 'select',
    name: '选择器',
    needOption: true,
    value: '',
    attrs: ['placeholder', 'clearable', 'disabled', 'multiple', 'multiple-limit', 'collapse-tags']
  },
  {
    type: 'radio',
    name: '单选框',
    needOption: true,
    value: '',
    attrs: ['disabled']
  },
  {
    type: 'checkbox',
    name: '多选框',
    needOption: true,
    value: [],
    attrs: ['disabled', '*checkbox-min', '*checkbox-max']
  },
  {
    type: 'cascader',
    name: '级联选择器',
    needOption: true,
    value: [],
    attrs: ['placeholder', 'disabled', 'clearable', 'show-all-levels']
  },
  {
    type: 'switch',
    name: '开关',
    value: false,
    attrs: ['disabled', 'width', 'active-text', 'inactive-text']
  },
  {
    type: 'slider',
    name: '滑块',
    value: 0,
    attrs: ['disabled', 'step', '*slider-min', '*slider-max', 'show-tooltip', 'show-input', 'show-stops', 'range']
  },
  {
    type: 'datepicker',
    name: '日期选择器',
    value: '',
    attrs: ['disabled', 'clearable', 'placeholder', '*datepicker-type',
      'format', 'value-format', '*datepicker-range-separator', '*datepicker-start-placeholder', '*datepicker-end-placeholder']
  },
  {
    type: 'timeselect',
    name: '时间选择器',
    value: '',
    attrs: ['disabled', 'clearable', 'placeholder', 'value-format', 'is-range',
      '*timepicker-range-separator', '*timepicker-start-placeholder', '*timepicker-end-placeholder']
  },
  {
    type: 'colorpicker',
    name: '颜色选择器',
    value: '',
    attrs: ['disabled', 'show-alpha', 'color-format']
  },
  {
    type: 'progress',
    name: '进度条',
    value: 0,
    attrs: ['*progress-type', 'status', 'stroke-width', '*progress-show-text']
  },
  {
    type: 'rate',
    name: '评分',
    value: 0,
    attrs: ['*star-max', 'disabled', 'allow-half', '*rate-show-text']
  },
  {
    type: 'tags',
    name: '标签',
    value: ['默认'],
    attrs: ['*tags-type', 'show-add', 'button-type', 'button-size', 'button-words', 'closable', 'hit']
  }
]

export {
  BASIC_COMPONENTS
}
