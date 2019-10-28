<template>
  <section class="row-setting">
    <i class="el-icon-copy-document" @click="copyRow"></i>
    <i class="el-icon-delete" @click="delRow"></i>
  </section>
</template>

<script>

export default {
  props: {
    activeRow: Number
  },
  methods: {
    copyRow () {
      this.$store.dispatch('copyRow')
    },
    delRow () {
      this.$store.dispatch('deleteRow')
    }
  }
}
</script>

<style lang="less" scoped>
@primary: #7367f0;

.row-setting{
  position: absolute;
  bottom:0;
  right:0;
  width: 40px;
  padding: 0 5px;
  height: 20px;
  background: @primary;
  font-size:16px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
