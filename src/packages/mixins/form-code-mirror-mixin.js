export default {
  computed: {
    cmOptions () { // codeMirror 配置项 详见 https://codemirror.net/doc/manual.html#config
      return this.attrsAll.cmOptions ? this.attrsAll.cmOptions : {
        tabSize: 2,
        lineNumbers: true,
        line: true
      }
    }
  }
}
