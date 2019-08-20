<template>
  <div>
    <el-form :module="module" label-width="80px">
      <schema-form
        :module="module"
        :schema="schema"
        :options="options"
      >
      </schema-form>
    </el-form>
  </div>
</template>

<script>
import { module, schema, options } from './const.js'
export default {
  data () {
    return {
      module,
      options
    }
  },
  computed: {
    schema () {
      return schema.map(list => {
        return list.map(item => {
          if (item.prop === 'phone') return { ...item, on: { blur: this.onSelectBlur } }
          return item
        })
      })
    }
  },
  methods: {
    onSelectBlur (val) {
      console.log('val: ', val)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
