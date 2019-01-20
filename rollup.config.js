import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import {uglify }   from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'mengt',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			nodeResolve({
				jsnext: true,
				main: true
			  }), 
			commonjs(),
			babel({
				exclude: ['node_modules/**'],
				runtimeHelpers: true
     		 }),
      		uglify({}, minify)
		]
	},
];