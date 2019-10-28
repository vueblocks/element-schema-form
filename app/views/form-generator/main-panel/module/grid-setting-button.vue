<template>
  <div
    class="grid-setting-button"
    @mousedown="onMouseDown"
  >
    {{step}}
  </div>
</template>

<script>
export default {
  props: {
    sliderWidth: Number, // 滑条的宽度
    gridNum: Number, // 栅格的分数
    currentPosition: String, // 按钮相对的滑条 的位置
    index: Number, // 滑块的次序 从0开始
    step: Number, // 当前滑块定位的份数
    activeRow: Number,
    activeLayout: Array // 当前活跃布局
  },
  data () {
    return {
      startX: 0, // x起始位置(计算相对位置)
      startPosition: 0 // x起始位置(计算绝对位置)
    }
  },
  methods: {
    onMouseDown (e) {
      e.preventDefault()
      this.startX = e.clientX
      this.startPosition = parseFloat(this.currentPosition)
      window.addEventListener('mousemove', this.onMoving)
      window.addEventListener('mouseup', this.moveEnd)
    },
    onMoving (e) {
      e.preventDefault()
      let _diff = (e.clientX - this.startX) / this.sliderWidth * 100
      this.newPosition = this.startPosition + _diff
      this.setPosition(this.newPosition)
    },
    moveEnd () {
      window.removeEventListener('mousemove', this.onMoving)
      window.removeEventListener('mouseup', this.moveEnd)
    },
    setPosition (pos) {
      let _step = 100 / 24
      let _num = Math.round(pos / _step)
      // 滑块移动范围
      let _cloneLayout = [...this.activeLayout]
      let _prev = _cloneLayout[this.index - 1] ? _cloneLayout.slice(0, this.index).reduce((sum, b) => { return sum + b }, 0) : 0
      let _after = _cloneLayout[this.index] ? _cloneLayout.slice(0, this.index + 2).reduce((sum, b) => { return sum + b }, 0) : 24
      if (_num <= _prev + 1) _num = _prev + 1
      if (_num >= _after - 1) _num = _after - 1
      // let _cloneLayout[this.index - 1]
      // 占用分数出现变化之后进行调节
      if (this.step !== _num) {
        // 计算新的布局 index=0 第一个滑块只对后一位产生影响 [8,8,8] => [9,7,6]
        _num = _num - _prev
        // 计算差和 更新数据
        let _diff = _cloneLayout[this.index] - _num
        _cloneLayout[this.index] = _num
        _cloneLayout[this.index + 1] = _cloneLayout[this.index + 1] + _diff
        // 计算新的结果
        let _result = this.$store.state.layoutSections.map((list, rowIdx) => {
          if (rowIdx === this.activeRow) {
            return list.map((item, colIdx) => {
              return {
                ...item,
                colGrid: { span: _cloneLayout[colIdx] }
              }
            })
          }
          return list
        })
        this.$store.commit('UPDATE_LAYOUT_SECTIONS', _result)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.grid-setting-button {
  width: 16px;
  height: 16px;
  border: 2px solid #7367f0;
  background-color: #fff;
  border-radius: 50%;
  transition: .2s;
  user-select: none;
  font-size:12px;
  text-align: center;
  line-height: 16px;
}
</style>
