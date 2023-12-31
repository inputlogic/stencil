import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import pkg from './package.json' assert { type: "json" }

export default [
  {
    input: 'src/index.js',
    output: [
      {file: pkg.main, format: 'cjs', sourcemap: true, },
      {file: pkg.module, format: 'es', sourcemap: true}
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        inject: true
      }),
      nodeResolve(),
      babel({ 
        exclude: 'node_modules/**',
        presets: ['@babel/env', ['@babel/preset-react', {runtime: 'automatic'}]]
      }),
      commonjs(),
    ]
  },
]
