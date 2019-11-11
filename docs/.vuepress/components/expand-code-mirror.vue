<template>
  <el-form label-position="top">
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      model: { code: 'let a = 100' },
      schema: [
        [
          {
            type: 'codemirror',
            prop: 'code',
            formItem: { label: '代码镜像' },
            attrs: {
              cmOptions: {
                tabSize: 2,
                mode: 'text/javascript',
                theme: 'night',
                lineNumbers: true,
                line: true
              }
            },
            on: {
              change: this.codeChange
            }
          }
        ]
      ]
    }
  },
  methods: {
    codeChange (code) {
      console.log(code)
    }
  }
}
</script>

<style scoped>

</style>
