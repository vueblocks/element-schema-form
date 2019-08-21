export const module = {
  name: 'lk',
  age: '18',
  phone: '',
  sex: 'male',
  expire: '',
  location: [],
  isOn: false
}
export const schema = [
  [
    {
      type: 'input',
      prop: 'name',
      formItem: { label: '姓名' },
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
      type: 'FormSwitch',
      prop: 'isOn',
      formItem: { label: '开关' }
    }
  ]
]
export const options = {
  phone: [{ label: '1881031****', value: '1881031****' }, { label: '1861031****', value: '1861031****' }],
  sex: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }],
  location: [
    { label: '北京', value: 'beijing', children: [{ label: '通州', value: 'tongzhou' }] },
    { label: '天津', value: 'tianjin' }
  ]
}
