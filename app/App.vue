<template>
  <el-container style="height: 100%;">
    <el-header style="padding: 0;">
      <el-menu
        class="el-menu--form-generator"
        mode="horizontal"
        router
        :background-color="headerBg"
        :text-color="headerTextColor"
        :active-text-color="headerActiveTextColor"
        :default-active="activeIndex"
        @select="handleSelect">
        <el-menu-item index="1" route="/test-common">基础组件</el-menu-item>
        <el-menu-item index="2" route="/test-extend">扩展组件</el-menu-item>
        <el-menu-item index="3" route="/form-generator">表单生成器</el-menu-item>
      </el-menu>
    </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: 'APP',
  data () {
    return {
      activeIndex: '1',
      headerBg: '#10163a',
      headerTextColor: '#ffffff',
      headerActiveTextColor: '#FF9F43'
    }
  },
  methods: {
    handleSelect () {

    }
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
</style>
