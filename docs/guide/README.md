---
{
  "title": "介绍",
}
---

## 背景

前端领域里，在中后台实际业务场景中，基本上逃不过表单页面的开发，表单页面承担着数据输入的角色，是数据收集的重要来源。

而对于工程中使用 **Element** 作为UI组件库的项目而言，前端开发者在使用 `el-form` 的时候可能更多的都在关注：

* 如何布局表单
* 表单控件类型
* 表单控件配置项
* 表单的状态管理
* 表单校验

从而为了实现一个业务场景复杂的表单，往往要编写大量重复的代码，以及产生篇幅巨大的单页面组件，而这样的开发方式是不必要的。

## 方案

经过我们在表单领域的不断探索与尝试，总结出了一套基于 **JSON Schema** 规范的数据动态生成表单的解决方案 **Element Schema Form**。

**Element Schema Form** 是一个基于 `Vue`、`element-ui` 技术栈封装的表单组件，用于解决大型、复杂表单页面开发过程中所做的大量重复性工作。使用一份 JSON Schema 即可生成一个成型的 form 表单，使表单组件代码变得简洁并便于维护。开发表单更高效。

## 核心功能

* 基于 JSON Schema 的数据结构生成表单
* 基于 `el-row`/`el-col` 的灵活表单布局
* 支持所有 `element-ui` 基础表单组件
* 支持常用第三方扩展组件，如 `codemirror`、`quill editor`、`markdown editor` 等
* 支持个性化的自定义插槽组件
* 支持可视化构建表单

## JSON Schema 规范

如果你还不了解什么是 JSON Schema，请移步这里 [JSON Schema](https://json-schema.org/)

## 可视化探索

为了开发更高效，我们提供了基于 **Element Schema Form** 开发的可视化配置工具

表单设计器 [element-form-generator](https://github.com/vueblocks/element-form-generator)

只需简单操作几步即可配置好一个 form 表单
