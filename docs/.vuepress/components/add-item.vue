<template>
  <section class="basic-add-item">
    <el-form size="small" label-width="100px" :model="model" :rules="rules"  ref="ruleForm">
      <schema-form
        :model="model"
        :schema="schema"
      >
        <el-button 
          v-for="flag in indexList" 
          :key="flag" 
          :slot="`delete_${flag}`"
          size="small" 
          type="primary" 
          class="delBtn"
          @click="delDomain(flag)"
        >删除</el-button>
        <el-form-item slot="submit">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button type="primary" plain @click="addDomain">新增域名</el-button>
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
      indexList: [0],
      flagRecord: 0,
      ss: 'delete_0',
      model: {
        email: '',
        domains_0: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {
    schema () {
      let _list = this.indexList.map((flag, index) => ([
        { 
          type: 'input', 
          prop: `domains_${flag}`, 
          formItem: { label: `域名${index}`, 
          rules: { required: true, message: '域名不能为空', trigger: 'blur' } }, 
          colGrid: { span: 20 } 
        },
        { slot: `delete_${flag}`, colGrid: { span: 4 }  }
      ]))
      return [
        [ { type: 'input', prop: 'email', formItem: { label: '邮箱' } } ],
        ..._list,
        [ { slot: 'submit' } ]
      ]
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
    },
    addDomain () {
      this.flagRecord += 1
      this.indexList.push(this.flagRecord)
    },
    delDomain (flag) {
      this.indexList = this.indexList.filter(idx => idx !== flag)
      this.model = this.model.$delete(`delete_${flag}`)
    }
  }
}
</script>

<style scoped>

.basic-add-item .delBtn{
  margin-left: 20px;
}
</style>