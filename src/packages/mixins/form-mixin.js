export default {
  props: {
    value: [Number, String, Array, Object, Boolean], // 绑定值
    prop: String,
    modifier: String, // v-model修饰符
    dynamicAttrs: Object, // 动态属性
    options: Array, // 多选项目
    onEvents: { // 绑定事件
      type: Object,
      default () { return {} }
    }
  },
  computed: {
    bindVal: {
      get () {
        return this.formatVal(this.value)
      },
      set (val) {
        this.$emit('update:value', this.formatVal(val))
      }
    },
    attrsAll () {
      return { ...this.$attrs, ...this.dynamicAttrs }
    }
  },
  methods: {
    formatVal (val) {
      if (this.modifier === 'number') {
        let n = parseFloat(val)
        return isNaN(n) ? val : n
      }
      if (this.modifier === 'trim' && val) return val.trim()
      return val
    }
  }
}
