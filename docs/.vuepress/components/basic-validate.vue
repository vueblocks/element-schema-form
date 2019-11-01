<template>
  <section class="basic-instance">
    <el-form size="small" label-width="100px" :model="model" :rules="rules"  ref="ruleForm">
      <schema-form
        :model="model"
        :layout="layout"
        :schema="schema"
        :options="options"
      >
        <div class="line" slot="line"></div>
        <el-form-item slot="submit">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </schema-form>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      layout: {
        type: 'flex',
        align: 'middle'
      },
      model: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      schema: [
        [
          { type: 'input', prop: 'name', formItem: { label: '活动名称' } }
        ],
        [
          { type: 'select', prop: 'region', formItem: { label: '活动区域' } }
        ],
        [
          {
            type: 'datepicker', 
            prop: 'date1', 
            formItem: { label: '活动时间' }, 
            colGrid: { span:11 } 
          },
          { slot: 'line', colGrid: { span:2 } },
          { 
            type: 'timeselect', 
            prop: 'date2', 
            formItem: { label: '', 'label-width': '0px' }, 
            colGrid: { span:11 }
          }
        ],
        [
          { type: 'switch', prop: 'delivery', formItem: { label: '即时配送' } }
        ],
        [
          { type: 'checkbox', prop: 'type', formItem: { label: '活动性质' } }
        ],
        [
          { type: 'radio', prop: 'resource', formItem: { label: '特殊资源' } }
        ],
        [
          {
            type: 'input', 
            prop: 'desc', 
            formItem: { label: '活动形式' }, 
            attrs: { type: 'textarea' } 
          }
        ],
        [
          { slot: 'submit' }
        ]
      ],
      options: {
        region: [
          { label: '区域一', value: 'shanghai' },
          { label: '区域二', value: 'beijing' }
        ],
        type: [
          { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' }, 
          { label: '地推活动', value: '地推活动' }
        ],
        resource: [
          { label: '线上品牌商赞助', value: '线上品牌商赞助' }, 
          { label: '线下场地免费', value: '线下场地免费' }
        ],
      },
      rules: {
         name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
  }
}
</script>

<style scoped>
.basic-instance .line{
  height: 2px;
  background: rgb(220, 223, 230);
  margin: -10px 5px 0;
}
</style>