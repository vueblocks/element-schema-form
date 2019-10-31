<template>
  <el-card shadow="hover">
    <section class="display-area">
      <component :is="compName"></component>
    </section>
    <main v-if="visible" class="code-area">
      <slot></slot>
    </main>
    <div class="previewArea">
      <span @click="visible = !visible">{{visible ? '隐藏代码' : '显示代码'}}</span>
      <a class="previewArea__link" :href="link" target="_blank">在线运行</a>
    </div>
  </el-card>
  </section>
</template>

<script>

import BasicValidate from './basic-validate'
import ValidateNumber from './validate-number'
import AddItem from './add-item'

export default {
  props: {
    compName: String,
    link: {
      type: String,
      default: '#'
    }
  },
  components: {
    BasicValidate,
    ValidateNumber,
    AddItem
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style>
.el-card__body{
  padding: 0;
}
</style>

<style  scoped>
.display-area {
  padding: 20px;
}
.previewArea {
  height: 44px;
  border-top: 1px solid #eaeefb;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
  color: #fff;
  position: relative;
  font-size:14px;
}
.previewArea:hover{
  color: #409EFF;
  transition: all ease 0.5s;
}
.previewArea__link{
  position: absolute;
  right:10px;
  color: #409EFF;
}
.code-area{
  transition: all ease 0.5s;
}
</style>