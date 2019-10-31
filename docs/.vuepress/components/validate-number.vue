<template>
   <section class="basic-number-validate">
    <el-form size="small" label-width="100px" :model="model" :rules="rules"  ref="ruleForm">
      <schema-form
        :model="model"
        :schema="schema"
      >
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
      model: {
        age: ''
      },
      schema: [
        [
           { type: 'input', prop: 'age', formItem: { label: '年龄' }, modifier: 'number' }
        ],
        [
          { slot: 'submit' }
        ]
      ],
      rules: {
        age: [
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
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
.basic-number-validate{
  padding: 30px;
}
</style>