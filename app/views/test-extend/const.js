export const module = {
  json: {
    a: 10,
    b: 20,
    customer: 10
  },
  quill: '<h4>一段文字</h4>',
  code: 'let a = 100'
}
export const schema = [
  [
    {
      type: 'jsoneditor',
      prop: 'json',
      frontSlot: 'json',
      formItem: { label: '' },
      attrs: { mode: 'code' }
    }
  ],
  [
    {
      type: 'quill',
      prop: 'quill',
      formItem: { label: '富文本编辑' },
      attrs: { 'editor-toolbar': [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['code-block']]
      }
    }
  ],
  [
    {
      type: 'codemirror',
      prop: 'code',
      formItem: { label: '代码镜像' }
    }
  ]
]
export const options = {}
