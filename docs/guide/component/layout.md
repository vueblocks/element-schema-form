
### 简介

SchemaForm 整体布局采用 el-row 和 el-col 进行封装, 通过基础的24分栏，迅速简便地创建布局

### 分栏间隔

<code-contain compName="LayoutGutter" link="https://codesandbox.io/s/fenlanjiange-8tbs8?fontsize=14">  
<<< @/docs/.vuepress/components/layout-gutter.vue
</code-contain>

### 分栏偏移

<code-contain compName="LayoutOffset" link="https://codesandbox.io/s/fenlanpianyi-z127w?fontsize=14">  
<<< @/docs/.vuepress/components/layout-offset.vue
</code-contain>

### 响应式布局

<code-contain compName="LayoutFlexible" link="https://codesandbox.io/s/xiangyingshibuju-xbdlp?fontsize=14">  
<<< @/docs/.vuepress/components/layout-flexible.vue
</code-contain>

### layout Attributes

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--|
gutter|栅格间隔|number|—|0
type|布局模式，可选 flex，现代浏览器下有效|string|—|—
justify|flex布局下的水平排列方式|string|start/end/center/space-around/space-between|start
align|flex布局下的垂直排列方式|string|top/middle/bottom|top
tag|自定义元素标签|string|*|div

### colGrid Attributes

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--|
span|栅格占据的列数|number|—|24
offset|栅格左侧的间隔格数|number|—|0
push|栅格向右移动格数|number|—|0
pull|栅格向左移动格数|number|—|0
xs|<768px|响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—
sm|≥768px|响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—
md|≥992px|响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—
lg|≥1200px|响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—
xl|≥1920px|响应式栅格数或者栅格属性对象|number/object (例如： {span: 4, offset: 4})|—|—
tag|自定义元素标签|string	*	div
