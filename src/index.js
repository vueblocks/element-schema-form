import SchemaForm from './packages/SchemaForm.vue'
import SchemaFormInput from './packages/components/SchemaFormInput.vue'
import SchemaFormSelect from './packages/components/SchemaFormSelect.vue'
import SchemaFormRadio from './packages/components/SchemaFormRadio.vue'
import SchemaFormDatepicker from './packages/components/SchemaFormDatepicker.vue'
import SchemaFormCascader from './packages/components/SchemaFormCascader.vue'
import SchemaFormPlaceholder from './packages/components/SchemaFormPlaceholder.vue'
import SchemaFormCheckbox from './packages/components/SchemaFormCheckbox.vue'
import SchemaFormSlider from './packages/components/SchemaFormSlider.vue'
import SchemaFormTimeselect from './packages/components/SchemaFormTimeselect.vue'
import SchemaFormTimepicker from './packages/components/SchemaFormTimepicker.vue'
import SchemaFormRate from './packages/components/SchemaFormRate.vue'
import SchemaFormSwitch from './packages/components/SchemaFormSwitch.vue'
import SchemaFormColorpicker from './packages/components/SchemaFormColorpicker.vue'
import SchemaFormTags from './packages/components/SchemaFormTags.vue'
import SchemaFormProgress from './packages/components/SchemaFormProgress.vue'

import SchemaFormItem from './packages/SchemaFormItem.vue'

import FormMixin from './packages/mixins/form-mixin'
import LayoutMixin from './packages/mixins/layout-mixin'

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
  SchemaFormTimepicker
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
  SchemaFormItem,
  FormMixin,
  LayoutMixin
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
