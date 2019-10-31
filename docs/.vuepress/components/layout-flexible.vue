<template>
  <el-form>
    <schema-form
      :model="{}"
      :layout="layout"
      :schema="schema"
    >
      <div 
        class="grid-content"
        v-for="idx in 4" 
        :key="idx" 
        :slot="`col_${idx}`" 
      ></div>
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      layout: {
        gutter:20
      },
      schema: [
        [ 
          { slot: 'col_1', colGrid: { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 } },
          { slot: 'col_2', colGrid: { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 } },
          { slot: 'col_3', colGrid: { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 } },
          { slot: 'col_4', colGrid: { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 } } 
        ]
      ]
    }
  }
}
</script>

<style  scoped>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
}
</style>