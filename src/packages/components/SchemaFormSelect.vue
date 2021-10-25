<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-option
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
      <template v-if="hasOptionSides">
        <span v-for="(items, index) in optionSides" :key="index" :class="`side-${index}`">
          {{ option[items] }}
        </span>
      </template>
      <span v-else>{{ option.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
import FormMixin from '../mixins/form-mixin'

export default {
  name: 'SchemaFormSelect',
  mixins: [FormMixin],
  computed: {
    optionSides () {
      return this.attrsAll.optionSides || ''
    },
    hasOptionSides () {
      return Array.isArray(this.optionSides) && this.optionSides.length >= 2
    }
  }
}
</script>

<style lang="less" scoped>

</style>
