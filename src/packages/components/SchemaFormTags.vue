<template>
  <div class="schema-form-tag">
    <el-tag
      v-for="(tag,idx) in bindVal"
      :key="`${tag}_${idx}`"
      :type="type"
      :hit="hit"
      :size="size"
      :effect="effect"
      :color="color"
      :closable="closable"
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="showAdd && inputVisible  "
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button
      v-if="showAdd && !inputVisible"
      class="button-new-tag"
      :size="buttonSize"
      :type="buttonType"
      @click="showInput"
    >{{buttonWords}}</el-button>
  </div>
</template>

<script>
import FormMixin from '../mixins/form-mixin'
import FormTagsMixin from '../mixins/form-tags-mixin'

export default {
  name: 'SchemaFormTags',
  mixins: [FormMixin, FormTagsMixin],
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.bindVal.splice(this.bindVal.indexOf(tag), 1)
      this.$emit('change', { prop: this.prop, value: this.bindVal })
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.bindVal.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
      this.$emit('change', { prop: this.prop, value: this.bindVal })
    }
  }
}
</script>

<style lang="less">
.schema-form-tag{
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}

</style>
