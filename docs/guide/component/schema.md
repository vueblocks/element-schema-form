## 数据字段 prop

> prop 是辨别当前组件的唯一字段，既是 ```model 和 options  的键值 key ```，又是```el-form``` 使用 ```validate、resetFields``` 方法的必填字段，所以需保证 prop的 唯一性

## 组件类型 type

> SchemaForm 的组件是基于 Element 进行封装，目标是完美兼容原组件的所有属性

### 内置类型

类型|含义|属性参考
:--|:--|:--
input| 输入框 | [el-input](https://element.eleme.cn/#/zh-CN/component/input)
select| 选择器 | [el-select](https://element.eleme.cn/#/zh-CN/component/select)
radio| 单选框组 | [el-radio-group](https://element.eleme.cn/#/zh-CN/component/radio)
checkbox| 多选框组 | [el-checkbox-group](https://element.eleme.cn/#/zh-CN/component/checkbox)
cascader| 级联选择器 | [el-cascader](https://element.eleme.cn/#/zh-CN/component/cascader)
switch| 开关 | [el-switch](https://element.eleme.cn/#/zh-CN/component/switch)
slider| 滑块 | [el-slider](https://element.eleme.cn/#/zh-CN/component/slider)
datepicker| 日期选择器 | [el-date-picker](https://element.eleme.cn/#/zh-CN/component/date-picker)
timeselect| 固定时间 | [el-time-select](https://element.eleme.cn/#/zh-CN/component/time-picker)
timepicker| 任意时间 | [el-time-picker](https://element.eleme.cn/#/zh-CN/component/time-picker)
colorpicker| 颜色选择器 | [el-color-picker](https://element.eleme.cn/#/zh-CN/component/color-picker)
progress| 进度条 | [el-progress](https://element.eleme.cn/#/zh-CN/component/progress)
rate| 评分 | [el-rate](https://element.eleme.cn/#/zh-CN/component/rate)

## 表单属性 formItem

> 兼容所有el-form-item的属性,以下内容为常用属性

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
label|标签文本|string|—|—
label-width|表单域标签的的宽度，例如 '50px'。支持 auto|string|—|—
show-message|是否显示校验错误信息|boolean|—|true
inline-message|以行内形式展示校验信息|boolean|—|false
size|用于控制该表单域下组件的尺寸|string|medium / small / mini|-

## 绑定值修饰符 modifier

> 为了更好的支持数值绑定，增加了```v-model```的修饰符，现支持

参数|说明
:--|:--
number|自动将用户的输入值转为数值类型
trim|自动过滤用户输入的首尾空白字符

## 属性绑定 attrs 

> 支持Element组件的属性，以```el-input```为例,具体参数 可参考 [Element](https://element.eleme.cn/#/zh-CN)

``` js
 {
   type: 'input',
   prop: 'name',
   attrs: { type: 'textarea' }
 }
```

## 动态属性绑定 dynamicAttrs

> 除了绑定的静态属性外，还支持动态属性的绑定，例如用于与其它操作联动

``` js
 {
   type: 'input',
   prop: 'name',
   dynamicAttrs: { disabled: !!this.model.id }
 }
```

## 事件绑定 on

> 支持Element组件的事件，以```el-input```为例,具体参数 可参考 [Element](https://element.eleme.cn/#/zh-CN)

``` js
 {
   type: 'input',
   prop: 'name',
   on: { focus: this.onNameFocus }
 }
```

### 事件 & 按键修饰符

> 对于 .passive、.capture 和 .once 这些事件修饰符, Vue 提供了相应的前缀可以用于 on

修饰符|前缀
:--|:--
.passive|&
.capture|!
.once|~
.capture.once 或 .once.capture|~!

``` js
on: {
  '!click': this.doThisInCapturingMode,
  '~keyup': this.doThisOnce,
  '~!mouseover': this.doThisOnceInCapturingMode
}
```

> 对于所有其它的修饰符，私有前缀都不是必须的，因为你可以在事件处理函数中使用事件方法：

``` js
on: {
  keyup: function (event) {
    // .self 等价于 如果触发事件的元素不是事件绑定的元素则返回
    if (event.target !== event.currentTarget) return
    // 如果按下去的不是 enter 键或者
    // 没有同时按下 shift 键
    // 则返回
    if (!event.shiftKey || event.keyCode !== 13) return
    // 阻止 事件冒泡
    event.stopPropagation()
    // 阻止该元素默认的 keyup 事件
    event.preventDefault()
    // ...
  }
}
```

## 插槽 slot

参数|说明|
:--|:--
slot| 自定义完整组件
labelSlot| 用于 el-form-item 中的 label插槽
frontSlot| 定义element 组件前的插槽
rearSlot| 定义element 组件后的插槽
