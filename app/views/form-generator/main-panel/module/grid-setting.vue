<template>
  <section class="grid-setting">
    <div class="grid-setting__slider" id="slider">
      <!-- 栅格截断点位置 -->
      <span
        class="grid-setting__slider__stop"
        v-for="idx in stopPointNum"
        :key="idx + 'stop'"
        :style="calcStop(idx)"
      >
      </span>
      <!-- 栅格移动按钮 -->
      <div
        class="grid-setting__slider__btn"
        v-for="(step,idx) in buttonStep"
        :key="idx"
        :style="calcBtn(idx)"
      >
        <grid-setting-button
          :sliderWidth="sliderWidth"
          :gridNum="gridNum"
          :index="idx"
          :step="step"
          :activeRow="activeRow"
          :activeLayout="activeLayout"
          :currentPosition="calcBtnPer(idx)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import GridSettingButton from './grid-setting-button'

export default {
  inject: ['fg'],
  props: {
    activeRow: Number, // 激活行数
    schema: Array // 表单整体
  },
  components: {
    GridSettingButton
  },
  data () {
    return {
      gridNum: 24, // 栅格数
      sliderWidth: 0 // 滑条的宽度
    }
  },
  computed: {
    activeLayout () {
      if (!this.fg.layoutSections[this.activeRow]) return []
      return this.fg.layoutSections[this.activeRow].map(item => item.colGrid.span)
    },
    stopPointNum () {
      return this.gridNum + 1
    },
    buttonStep () { // 按钮栅格 [8,8]
      return this.activeLayout.length >= 2 ? this.activeLayout.slice(0, -1) : []
    }
  },
  created () {
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  mounted () {
    this.resize()
  },
  methods: {
    calcStop (idx) { // 截断点的left位置
      let _left = (100 / this.gridNum) * (idx - 1)
      return { left: _left + '%' }
    },
    calcBtn (idx) { // 按钮的left位置
      let _step = this.buttonStep.slice(0, idx + 1).reduce((sum, b) => { return sum + b }, 0)
      return { left: _step / 24 * 100 + '%' }
    },
    calcBtnPer (idx) { // 按钮的left位置
      let _step = this.buttonStep.slice(0, idx + 1).reduce((sum, b) => { return sum + b }, 0)
      return _step / 24 * 100 + '%'
    },
    resize (e) {
      let _dom = document.getElementById('slider')
      this.sliderWidth = _dom.clientWidth
    }
  }
}
</script>

<style lang="less" scoped>
.grid-setting{
  padding: 3px 0;
  width: 100%;
  position: absolute;
  left: 0;
  top:5px;
  &__slider {
    width: 100%;
    height: 6px;
    background-color: #e4e7ed;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    &__stop{
      position: absolute;
      height: 6px;
      width: 6px;
      border-radius: 100%;
      background-color: #fff;
      transform: translateX(-50%);
    }
    &__btn{
      height: 36px;
      width: 36px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      top: -15px;
      transform: translateX(-50%);
      background-color: transparent;
    }
  }
}
</style>
