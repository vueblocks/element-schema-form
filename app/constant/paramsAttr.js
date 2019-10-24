export const paramsAttr = {
  // 输入框 ...........................
  type: {
    label: '类型',
    value: '',
    type: 'select',
    options: [{ label: '文本域', value: 'textarea' }]
  },
  rows: {
    label: '文本域高度',
    value: 2,
    type: 'number',
    associate: 'type'
  },
  placeholder: {
    label: '占位符',
    value: '',
    type: 'string'
  },
  clearable: {
    label: '可清空',
    value: false,
    type: 'boolean'
  },
  disabled: {
    label: '被禁用',
    value: false,
    type: 'boolean'
  },
  'show-password': {
    label: '密码框',
    value: false,
    type: 'boolean'
  },
  'prefix-icon': {
    label: '首部icon',
    value: '',
    type: 'string'
  },
  'suffix-icon': {
    label: '尾部icon',
    value: '',
    type: 'string'
  },
  'show-word-limit': {
    label: '长度限制',
    value: false,
    type: 'boolean'
  },
  'maxlength': {
    label: '最大长度',
    value: 10,
    type: 'number',
    associate: 'show-word-limit'
  },
  //  select ...........
  multiple: {
    label: '多选',
    value: false,
    type: 'boolean'
  },
  'multiple-limit': {
    label: '多选-最大项目数',
    value: 5,
    type: 'number',
    associate: 'multiple'
  },
  'collapse-tags': {
    label: '多选-折叠标签',
    value: false,
    type: 'boolean',
    associate: 'multiple'
  },
  // checkbox ..............
  min: {
    label: '最少(小)值',
    value: 0,
    type: 'number'
  },
  max: {
    label: '最多(大)值',
    value: 100,
    type: 'number'
  },
  // cascader ....
  'show-all-levels': {
    label: '选值完整路径',
    value: true,
    type: 'boolean'
  },
  // switch ....
  width: {
    label: '宽度',
    value: 40,
    type: 'number'
  },
  'active-text': {
    label: '激活文字',
    value: '',
    type: 'string'
  },
  'inactive-text': {
    label: '置灰文字',
    value: '',
    type: 'string'
  },
  // slider ......
  step: {
    label: '步长',
    value: 1,
    type: 'number'
  },
  'show-tooltip': {
    label: 'tooltip',
    value: true,
    type: 'boolean'
  },
  'show-input': {
    label: '输入框',
    value: false,
    type: 'boolean'
  },
  'show-stops': {
    label: '间断点',
    value: false,
    type: 'boolean'
  },
  range: {
    label: '范围选择',
    value: false,
    type: 'boolean'
  }
}
