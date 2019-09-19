<template>
  <div class="config-panel">
    <el-tabs v-model="activeTab" stretch>
      <el-tab-pane label="表单设置" name="formSetting">
        <!-- 表单属性 -->
        <fieldset class="config-panel__fieldset">
          <figcaption class="config-panel__figcaption">
            <span>表单属性</span>
          </figcaption>
          <!-- 对齐方式 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="">对齐方式</label>
              </el-col>
              <el-col :span="18" class="figure-control">
                <el-radio-group v-model="fg.formSettings.labelPosition" size="mini">
                  <el-radio-button label="left">左</el-radio-button>
                  <el-radio-button label="right">右</el-radio-button>
                  <el-radio-button label="top">顶部</el-radio-button>
                </el-radio-group>
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
                <el-radio-group v-model="fg.formSettings.size" size="mini">
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
          <!-- 对齐方式 -->
          <figure class="config-panel__figure">
            <el-row type="flex" align="middle">
              <el-col :span="6" class="figure-label">
                <label for="row-gutter">栅格间隔</label>
              </el-col>
              <el-col :span="17" class="figure-control">
                <el-slider v-model="fg.formLayout.gutter" :max="72">
                </el-slider>
              </el-col>
              <el-col :span="1"></el-col>
            </el-row>
          </figure>
        </fieldset>
      </el-tab-pane>
      <el-tab-pane label="组件属性" name="componentSetting">
        <component-panel :editProp.sync="editProp" @success="onClearProp"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ComponentPanel from './module/component-panel'
export default {
  name: 'ConfigPanel',
  inject: ['fg'],
  components: {
    ComponentPanel
  },
  data () {
    return {
      activeTab: 'formSetting',
      editProp: ''
    }
  },
  methods: {
    editCompAttr (prop) {
      this.editProp = prop || ''
      this.activeTab = 'componentSetting'
    },
    onClearProp () {
      this.$emit('clearProp')
    }
  }
}
</script>

<style lang="less">
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
