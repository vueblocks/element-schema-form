import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import json from 'rollup-plugin-json'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

const components = require('./src/components')

const isMinify = !!process.env.MINIFY

const plugins = [
  babel({
    runtimeHelpers: true,
    exclude : 'node_modules/**'
  }),
  cjs({
    sourceMap: false
  }),
  filesize(),
  json(),
  node(),
  vue()
]

if (isMinify) {
  plugins.push(terser({
    compress: {
      drop_console: true
    }
  }))
}

const buildOutput = fileName => {
  return [
    {
      file: isMinify
        ? `./lib/${fileName}.common.min.js`
        : `./lib/${fileName}.common.js`,
      format: 'cjs',
      sourcemap: false,
      exports: 'named',
      globals: {
        'vue-codemirror-lite': 'vueCodemirrorLite',
        'vue2-editor': 'vue2Editor'
      }
    },
    {
      file: isMinify
        ? `./lib/${fileName}.umd.min.js`
        : `./lib/${fileName}.umd.js`,
      format: 'umd',
      name: fileName,
      sourcemap: false,
      globals: {
        'vue-codemirror-lite': 'vueCodemirrorLite',
        'vue2-editor': 'vue2Editor'
      }
    }
  ]
}

const buildOptions = components => {
  return Object.keys(components).map(key => {
    return {
      input: components[key],
      output: buildOutput(key),
      plugins,
      external: [
        'vueCodemirrorLite',
        'vue2Editor'
      ]
    }
  })
}


export default buildOptions(components)
