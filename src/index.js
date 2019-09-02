import SchemaForm from './packages/SchemaForm'
import SchemaFormInput from './packages/components/SchemaFormInput'
import SchemaFormSelect from './packages/components/SchemaFormSelect'
import SchemaFormRadio from './packages/components/SchemaFormRadio'
import SchemaFormDatepicker from './packages/components/SchemaFormDatepicker'
import SchemaFormCascader from './packages/components/SchemaFormCascader'
import SchemaFormPlaceholder from './packages/components/SchemaFormPlaceholder'
import SchemaFormCheckbox from './packages/components/SchemaFormCheckbox.vue'
import SchemaFormSlider from './packages/components/SchemaFormSlider.vue'
import SchemaFormTimeselect from './packages/components/SchemaFormTimeselect.vue'
import SchemaFormRate from './packages/components/SchemaFormRate.vue'
import SchemaFormSwitch from './packages/components/SchemaFormSwitch.vue'
import SchemaFormColorpicker from './packages/components/SchemaFormColorpicker.vue'
import SchemaFormTags from './packages/components/SchemaFormTags.vue'
import SchemaFormProgress from './packages/components/SchemaFormProgress.vue'

import SchemaFormJsoneditor from './packages/components/SchemaFormJsoneditor.vue'

import FormMixin from './packages/mixins/form-mixin'

const components = [
  SchemaForm,
  SchemaFormInput,
  SchemaFormSelect,
  SchemaFormRadio,
  SchemaFormDatepicker,
  SchemaFormCascader,
  SchemaFormPlaceholder,
  SchemaFormCheckbox,
  SchemaFormSlider,
  SchemaFormTimeselect,
  SchemaFormRate,
  SchemaFormSwitch,
  SchemaFormColorpicker,
  SchemaFormTags,
  SchemaFormProgress,
  SchemaFormJsoneditor
]

function install (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$globalParams = opts
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
