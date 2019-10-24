<template>
  <div class="label-layout">
    <el-checkbox v-model="isShow" v-if="showCheckbox"></el-checkbox>
    <label class="figure-label">{{title}}</label>
    <div class="figure-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    isBind: Boolean
  },
  computed: {
    isShow: {
      get () {
        return this.isBind
      },
      set (val) {
        this.$emit('update:isBind', val)
      }
    }
  }
}
</script>

<style lang="less">
.label-layout{
  .el-checkbox{
    margin-right:5px;
  }
}
</style>

<style lang="less" scoped>
.label-layout{
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  .figure-label {
    font-size: 12px;
    min-width:60px;
    margin-right:5px;
  }
  .figure-control {
    flex:1;
  }
}
</style>
