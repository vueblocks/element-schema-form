import SchemaForm from './packages/SchemaForm'
import SchemaFormInput from './packages/components/SchemaFormInput'
import SchemaFormSelect from './packages/components/SchemaFormSelect'
import SchemaFormRadio from './packages/components/SchemaFormRadio'
import SchemaFormDatepicker from './packages/components/SchemaFormDatepicker'
import SchemaFormCascader from './packages/components/SchemaFormCascader'

import FormMixin from './packages/mixins/form-mixin'

const components = [
  SchemaForm,
  SchemaFormInput,
  SchemaFormSelect,
  SchemaFormRadio,
  SchemaFormDatepicker,
  SchemaFormCascader
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install

export {
  SchemaForm,
  FormMixin
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
