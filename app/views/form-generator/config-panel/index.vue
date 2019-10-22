<template>
  <div class="config-panel">
    <el-tabs v-model="activeTab" stretch type="border-card">
      <el-tab-pane label="表单设置" name="formSetting">
        <!-- 表单属性 -->
        <fieldset class="config-panel__fieldset">
          <figcaption class="config-panel__figcaption">
            <span>表单属性</span>
          </figcaption>
          <!-- 标签位置 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="">标签位置</label>
              </el-col>
              <el-col :span="18" class="figure-control">
                <el-radio-group v-model="labelPosition" size="mini">
                  <el-radio-button label="left">左</el-radio-button>
                  <el-radio-button label="right">右</el-radio-button>
                  <el-radio-button label="top">顶部</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </figure>
          <!-- 标签宽度 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="">标签宽度</label>
              </el-col>
              <el-col :span="18" class="figure-control">
                <el-input-number
                  v-model.number="labelWidth"
                  size="mini"
                  :min="80"
                  :max="320"
                  :step="5"
                />
              </el-col>
            </el-row>
          </figure>
          <!-- 组件尺寸 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="">组件尺寸</label>
              </el-col>
              <el-col :span="18" class="figure-control">
                <el-radio-group v-model="size" size="mini">
                  <el-radio-button label="mini">超小</el-radio-button>
                  <el-radio-button label="small">小型</el-radio-button>
                  <el-radio-button label="medium">中等</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </figure>
        </fieldset>
        <!-- 栅格布局 -->
        <fieldset class="config-panel__fieldset">
          <figcaption class="config-panel__figcaption">
            <span>栅格布局</span>
          </figcaption>
          <!-- 栅格间隔 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="row-gutter">栅格间隔</label>
              </el-col>
              <el-col :span="17" class="figure-control">
                <el-slider v-model="gutter" :max="72">
                </el-slider>
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </figure>
            <!-- 对齐方式 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="row-gutter">对齐方式</label>
              </el-col>
              <el-col :span="19" class="figure-control">
                <el-radio-group v-model="justify" size="mini">
                  <el-radio-button label="start">左</el-radio-button>
                  <el-radio-button label="end">右</el-radio-button>
                  <el-radio-button label="center">居中</el-radio-button>
                </el-radio-group>
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </figure>
          <!-- 显示栅格 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="row-gutter">显示栅格</label>
              </el-col>
              <el-col :span="17" class="figure-control">
                <el-switch v-model="showGrid" />
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </figure>
          <!-- 显示布局 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="row-gutter">显示布局</label>
              </el-col>
              <el-col :span="17" class="figure-control">
                <el-switch v-model="showLayout" />
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </figure>
        </fieldset>
      </el-tab-pane>
      <el-tab-pane label="组件属性" name="componentSetting">
        <component-panel :editProp="activeProp"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ComponentPanel from './module/component-panel'
import { mapMutations } from 'vuex'

export default {
  name: 'ConfigPanel',
  components: {
    ComponentPanel
  },
  props: {
    activeProp: String // 当前激活prop
  },
  data () {
    return {
      activeTab: 'formSetting'
    }
  },
  computed: {
    labelWidth: {
      get () {
        return parseFloat(this.$store.state.formSettings.labelWidth)
      },
      set (val) {
        this.updateFormSetting({ labelWidth: val + 'px' })
      }
    },
    labelPosition: {
      get () {
        return this.$store.state.formSettings.labelPosition
      },
      set (val) {
        this.updateFormSetting({ labelPosition: val })
      }
    },
    size: {
      get () {
        return this.$store.state.formSettings.size
      },
      set (val) {
        this.updateFormSetting({ size: val })
      }
    },
    gutter: {
      get () {
        return this.$store.state.formLayout.gutter
      },
      set (val) {
        this.updateFormLayout({ gutter: val })
      }
    },
    justify: {
      get () {
        return this.$store.state.formLayout.justify
      },
      set (val) {
        this.updateFormLayout({ justify: val })
      }
    },
    showGrid: {
      get () {
        return this.$store.state.formControl.showGrid
      },
      set (val) {
        this.updateFormControl({ showGrid: val })
      }
    },
    showLayout: {
      get () {
        return this.$store.state.formControl.showLayout
      },
      set (val) {
        this.updateFormControl({ showLayout: val })
      }
    }
  },
  watch: {
    activeProp (val) {
      if (val) this.activeTab = 'componentSetting'
    }
  },
  methods: {
    ...mapMutations({
      updateFormSetting: 'UPDATE_FORM_SETTING',
      updateFormLayout: 'UPDATE_FORM_LAYOUT',
      updateFormControl: 'UPDATE_FORM_CONTROL'
    })
  }
}
</script>

<style lang="less">
@primary: #7367f0;
@lighten-primary-8: lighten(@primary, 8%);
@darken-primary-8: darken(@primary, 8%);

.el-tabs--border-card {
  border: none;
  box-shadow: none;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
  color: #fff;
  background-color: @lighten-primary-8;
  border: none;
  &:hover {
    color: #fff;
  }
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  background-color: @primary;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: #fff;
  background-color: @darken-primary-8;
}

.config-panel {
  &__figcaption {
    box-sizing: content-box;
    font-size: 14px;
    margin-bottom: 8px;
    padding: 8px 0;
    border-bottom: 1px solid #EBEEF5;
  }
  &__figure {
    margin-bottom: 16px;
    .figure-label {
      font-size: 12px;
    }
    .figure-control {
      text-align: right;
    }
  }
}
</style>
