export const model = {
  name: 'lk',
  age: '18',
  phone: '',
  sex: 'male',
  expire: '',
  location: [],
  isOn: false,
  city: ['beijing'],
  sliderVal: 60,
  sleepTime: '',
  star: 0,
  color: '#409EFF',
  label: ['小清新'],
  percent: 20
}
export const schema = [
  [
    {
      type: 'input',
      prop: 'name',
      formItem: { label: '姓名' },
      attrs: { placeholder: '测试优先级' },
      colGrid: { span: 8 }
    }, {
      type: 'input',
      prop: 'age',
      formItem: { label: '年龄' },
      colGrid: { span: 8 }
    }
  ],
  [
    {
      type: 'select',
      prop: 'phone',
      formItem: { label: '电话' }
    },
    {
      type: 'radio',
      prop: 'sex',
      formItem: { label: '性别' }
    }, {
      type: 'datepicker',
      prop: 'expire',
      formItem: { label: '有效期' },
      attrs: {
        type: 'monthrange',
        'range-separator': '至',
        'start-placeholder': '开始月份',
        'end-placeholder': '结束月份'
      }
    }
  ],
  [
    { type: 'cascader',
      prop: 'location',
      formItem: { label: '地域' },
      attrs: { 'show-all-levels': false }
    }, {
      type: 'switch',
      prop: 'isOn',
      formItem: { label: '开关' }
    }, {
      type: 'checkbox',
      prop: 'city',
      formItem: { label: '地域' }
    }
  ],
  [
    {
      type: 'slider',
      prop: 'sliderVal',
      formItem: { label: '成绩' },
      attrs: { 'show-stops': true, step: 10 }
    }, {
      type: 'timeselect',
      prop: 'sleepTime',
      formItem: { label: '晚睡时间' }
    }, {
      type: 'rate',
      prop: 'star',
      formItem: { label: '观影得分' }
    }
  ],
  [
    {
      type: 'colorpicker',
      prop: 'color',
      formItem: { label: '颜色' }
    }, {
      type: 'tags',
      prop: 'label',
      formItem: { label: '标签' },
      attrs: { size: 'medium', buttonSize: 'mini', 'show-add': true }
    }, {
      type: 'progress',
      prop: 'percent',
      formItem: { label: '进度' }
    }
  ]
]
export const options = {
  phone: [{ label: '1881031****', value: '1881031****' }, { label: '1861031****', value: '1861031****' }],
  sex: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }],
  location: [
    { label: '北京', value: 'beijing', children: [{ label: '通州', value: 'tongzhou' }] },
    { label: '天津', value: 'tianjin' }
  ],
  city: [
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' },
    { label: '广州', value: '广州', disabled: true }
  ]
}
