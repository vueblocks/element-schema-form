export default {
  computed: {
    showAdd () { // 是否展示新增按钮
      return this.attrsAll['show-add'] ? this.attrsAll['show-add'] : false
    },
    closable () { // 标签是否可删除
      return this.attrsAll.hasOwnProperty('closable') ? this.attrsAll.closable : true
    },
    type () { // 标签类型
      return this.attrsAll.type ? this.attrsAll.type : ''
    },
    hit () { // 标签是否有边框描边
      return this.attrsAll.hit ? this.attrsAll.hit : false
    },
    size () { // 标签尺寸
      return this.attrsAll.size ? this.attrsAll.size : ''
    },
    effect () { // 标签主题
      return this.attrsAll.effect ? this.attrsAll.effect : 'light'
    },
    color () { // 标签背景色
      return this.attrsAll.color ? this.attrsAll.color : ''
    },
    buttonSize () { // 按钮尺寸
      return this.attrsAll['button-size'] ? this.attrsAll['button-size'] : 'small'
    },
    buttonWords () { // 按钮文案
      return this.attrsAll['button-words'] ? this.attrsAll['button-words'] : '+ New Tag'
    },
    buttonType () { // 按钮类型
      return this.attrsAll['button-type'] ? this.attrsAll['button-type'] : ''
    }
  }
}
