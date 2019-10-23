<template>
  <div class="label-layout">
    <label class="figure-label">{{title}}</label>
    <div class="figure-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
.label-layout{
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  .figure-label {
    font-size: 12px;
    width:65px;
  }
  .figure-control {
    flex:1;
  }
}
</style>
