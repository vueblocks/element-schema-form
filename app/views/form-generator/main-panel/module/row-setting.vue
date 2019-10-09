<template>
  <section class="row-setting">
    <i class="el-icon-copy-document" @click="copyRow"></i>
    <i class="el-icon-delete" @click="delRow"></i>
  </section>
</template>

<script>
import shortid from 'js-shortid'
export default {
  inject: ['fg'],
  props: {
    activeRow: Number
  },
  computed: {
    activeSchema () {
      return this.fg.layoutSections[this.activeRow] || []
    }
  },
  methods: {
    copyRow () {
      let propList = []
      let _result = this.activeSchema.map(item => {
        if (item.prop) {
          let _cur = {
            oldProp: item.prop,
            newProp: shortid.gen()
          }
          propList.push(_cur)
          return {
            ...item,
            prop: _cur.newProp
          }
        }
        return item
      })
      this.fg.layoutSections.splice(this.activeRow + 1, 0, _result)
      propList.forEach(list => {
        this.addModuleAndOption(list)
      })
      console.log('this.fg.layoutSections: ', this.fg.layoutSections)
      this.$emit('delRowSuccess', { activeRow: this.activeRow + 1 })
    },
    delRow () {
      this.activeSchema.forEach(grid => {
        this.delModuleAndOption(grid)
      })
      let _activeSection = this.activeRow === 0 ? 0 : this.activeRow - 1
      this.fg.layoutSections.splice(this.activeRow, 1)
      this.$emit('delRowSuccess', { activeRow: _activeSection })
    },
    delModuleAndOption (grid) {
      //  删除module
      if (this.fg.formModel.hasOwnProperty(grid.prop)) this.$delete(this.fg.formModel, grid.prop)
      // 删除option
      if (this.fg.formOptions.hasOwnProperty(grid.prop)) this.$delete(this.fg.formOptions, grid.prop)
    },
    addModuleAndOption ({ oldProp, newProp }) {
      //  增加module
      if (this.fg.formModel.hasOwnProperty(oldProp)) this.$set(this.fg.formModel, newProp, this.fg.formModel[oldProp])
      // 删除option
      if (this.fg.formOptions.hasOwnProperty(oldProp)) this.$set(this.fg.formOptions, newProp, this.fg.formOptions[oldProp])
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
