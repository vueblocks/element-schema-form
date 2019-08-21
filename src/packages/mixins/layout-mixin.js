import cloneDeep from 'lodash.clonedeep'
export default {
  computed: {
    formatedSchema () {
      let _schema = cloneDeep(this.schema)
      _schema.map(list => {
        let _showNum = list.filter(item => !item.hide).length || 1
        list.map(obj => { obj.colGrid = obj.colGrid || { span: Math.round(24 / _showNum) } })
      })
      return _schema
    }
  }
}
