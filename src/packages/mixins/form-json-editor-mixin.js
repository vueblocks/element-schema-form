export default {
  computed: {
    width () { // 编辑器宽
      return this.attrsAll.width ? this.attrsAll.width : '100%'
    },
    height () { // 编辑器高
      return this.attrsAll.width ? this.attrsAll.width : '400px'
    },
    mode () { // 编辑器模式
      return this.attrsAll.mode ? this.attrsAll.mode : 'code'
    },
    editorOptions () { // 配置项
      return this.attrsAll.options ? this.attrsAll.options : {}
    }
  }
}
