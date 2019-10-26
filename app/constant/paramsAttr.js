export const paramsAttr = {
  // 输入框 ...........................
  '*input-type': {
    label: '类型',
    value: '',
    type: 'select',
    options: [{ label: '文本域', value: 'textarea' }],
    default: ''
  },
  rows: {
    label: '文本域高度',
    value: 1,
    type: 'number',
    associate: 'type',
    associateVal: 'textarea'
  },
  placeholder: {
    label: '占位符',
    value: '',
    type: 'string',
    default: ''
  },
  clearable: {
    label: '可清空',
    value: false,
    type: 'boolean',
    default: false
  },
  disabled: {
    label: '被禁用',
    value: false,
    type: 'boolean',
    default: false
  },
  'show-password': {
    label: '密码框',
    value: false,
    type: 'boolean',
    default: false
  },
  'prefix-icon': {
    label: '首部icon',
    value: '',
    type: 'string',
    default: ''
  },
  'suffix-icon': {
    label: '尾部icon',
    value: '',
    type: 'string',
    default: ''
  },
  'show-word-limit': {
    label: '长度限制',
    value: false,
    type: 'boolean',
    default: false
  },
  'maxlength': {
    label: '最大长度',
    value: 10,
    type: 'number',
    associate: 'show-word-limit',
    associateVal: true
  },
  //  select ...........
  multiple: {
    label: '多选',
    value: false,
    type: 'boolean',
    default: false
  },
  'multiple-limit': {
    label: '多选-最大项目数',
    value: 0,
    type: 'number',
    associate: 'multiple',
    associateVal: true,
    default: 0
  },
  'collapse-tags': {
    label: '多选-折叠标签',
    value: false,
    type: 'boolean',
    associate: 'multiple',
    associateVal: true,
    default: false
  },
  // checkbox ..............
  '*checkbox-min': {
    label: '最少勾选',
    value: -1,
    type: 'number',
    default: -1
  },
  '*checkbox-max': {
    label: '最多勾值',
    value: -1,
    type: 'number',
    default: -1
  },
  // cascader ....
  'show-all-levels': {
    label: '选值完整路径',
    value: true,
    type: 'boolean',
    default: true
  },
  // switch ....
  width: {
    label: '宽度',
    value: 40,
    type: 'number',
    default: 40
  },
  'active-text': {
    label: '激活文字',
    value: '',
    type: 'string',
    default: ''
  },
  'inactive-text': {
    label: '置灰文字',
    value: '',
    type: 'string',
    default: ''
  },
  // slider ......
  step: {
    label: '步长',
    value: 1,
    type: 'number',
    default: 1
  },
  'show-tooltip': {
    label: 'tooltip',
    value: true,
    type: 'boolean',
    default: true
  },
  'show-input': {
    label: '输入框',
    value: false,
    type: 'boolean',
    default: false
  },
  'show-stops': {
    label: '显示间断点',
    value: false,
    type: 'boolean',
    default: false
  },
  range: {
    label: '范围选择',
    value: false,
    type: 'boolean',
    default: false
  },
  '*slider-min': {
    label: '最小值',
    value: 0,
    type: 'number',
    default: 0
  },
  '*slider-max': {
    label: '最大值',
    value: 100,
    type: 'number',
    default: 100
  },
  // ................datepicker
  '*datepicker-type': {
    label: '显示类型',
    value: 'date',
    type: 'select',
    options: [
      { label: '日', value: 'date' },
      { label: '多日', value: 'dates' },
      { label: '年', value: 'year' },
      { label: '月', value: 'month' },
      { label: '周', value: 'week' },
      { label: '日期范围', value: 'daterange' },
      { label: '月份范围', value: 'monthrange' },
      { label: '日期和时间', value: 'datetime' },
      { label: '日期和时间范围', value: 'datetimerange' }
    ],
    default: 'date'
  },
  format: {
    label: '显示格式化',
    value: 'yyyy-MM-dd',
    type: 'string',
    default: 'yyyy-MM-dd'
  },
  'value-format': {
    label: '绑定值格式化',
    value: '',
    type: 'string',
    default: ''
  },
  '*datepicker-range-separator': {
    label: '范围-分割符',
    value: '',
    type: 'string',
    default: '',
    associate: 'type',
    associateVal: ['daterange', 'monthrange', 'datetimerange']
  },
  '*datepicker-start-placeholder': {
    label: '范围-起始占位',
    value: '',
    type: 'string',
    default: '',
    associate: 'type',
    associateVal: ['daterange', 'monthrange', 'datetimerange']
  },
  '*datepicker-end-placeholder': {
    label: '范围-起始占位',
    value: '',
    type: 'string',
    default: '',
    associate: 'type',
    associateVal: ['daterange', 'monthrange', 'datetimerange']
  },
  // time picker ..............
  'is-range': {
    label: '时间范围',
    value: false,
    type: 'boolean',
    default: false
  },
  '*timepicker-range-separator': {
    label: '范围-分割符',
    value: '',
    type: 'string',
    default: '',
    associate: 'is-range',
    associateVal: true
  },
  '*timepicker-start-placeholder': {
    label: '范围-起始占位',
    value: '',
    type: 'string',
    default: '',
    associate: 'is-range',
    associateVal: true
  },
  '*timepicker-end-placeholder': {
    label: '范围-起始占位',
    value: '',
    type: 'string',
    default: '',
    associate: 'is-range',
    associateVal: true
  },
  // colorpicker..........
  'show-alpha': {
    label: '透明度',
    value: false,
    type: 'boolean',
    default: false
  },
  'color-format': {
    label: '绑定值格式化',
    value: '',
    type: 'string',
    default: ''
  },
  // progress ...
  '*progress-type': {
    label: '类型',
    value: 'line',
    type: 'select',
    default: 'line',
    options: [
      { label: '线型', value: 'line' },
      { label: '环形', value: 'circle' },
      { label: '仪表盘', value: 'dashboard' }
    ]
  },
  status: {
    label: '状态',
    value: '',
    type: 'select',
    default: '',
    options: [
      { label: '成功', value: 'success' },
      { label: '失败', value: 'exception' },
      { label: '警告', value: 'warning' }
    ]
  },
  'stroke-width': {
    label: '宽度',
    value: 6,
    type: 'number',
    default: 6
  },
  '*progress-show-text': {
    label: '显示文本',
    value: true,
    type: 'boolean',
    default: true
  },
  // star ....
  '*star-max': {
    label: '最大分值',
    value: 5,
    type: 'number',
    default: 5
  },
  'allow-half': {
    label: '半选',
    value: false,
    type: 'boolean',
    default: false
  },
  '*rate-show-text': {
    label: '辅助文字',
    value: false,
    type: 'boolean',
    default: false
  },
  // ...tags
  '*tags-type': {
    label: '类型',
    value: '',
    type: 'select',
    default: '',
    options: [
      { label: 'success', value: 'success' },
      { label: 'info', value: 'info' },
      { label: 'warning', value: 'warning' },
      { label: 'danger', value: 'danger' }
    ]
  },
  'show-add': {
    label: '添加按钮',
    value: false,
    type: 'boolean',
    default: false
  },
  closable: {
    label: '删除',
    value: true,
    type: 'boolean',
    default: true
  },
  hit: {
    label: '边框描边',
    value: false,
    type: 'boolean',
    default: false
  },
  'button-size': {
    label: '按钮尺寸',
    value: '',
    type: 'select',
    default: '',
    options: [
      { label: 'medium', value: 'medium' },
      { label: 'small', value: 'small' },
      { label: 'mini', value: 'mini' }
    ],
    associate: 'show-add',
    associateVal: true
  },
  'button-words': {
    label: '按钮文案',
    value: '',
    type: 'string',
    default: '',
    associate: 'show-add',
    associateVal: true
  },
  'button-type': {
    label: '按钮类型',
    value: '',
    type: 'select',
    default: '',
    options: [
      { label: 'primary', value: 'primary' },
      { label: 'success', value: 'success' },
      { label: 'warning', value: 'warning' },
      { label: 'danger', value: 'danger' },
      { label: 'info', value: 'info' },
      { label: 'text', value: 'text' }
    ],
    associate: 'show-add',
    associateVal: true
  }
}
