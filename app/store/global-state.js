export default {
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
