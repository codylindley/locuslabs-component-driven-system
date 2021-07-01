import resolve from '@rollup/plugin-node-resolve';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const config = {
	input: 'index.js',
	output: {
		dir: 'dist',
		format: 'esm',
	},
	plugins: [
		excludeDependenciesFromBundle({
			peerDependencies: true,
			dependencies: true,
		}),
		resolve(),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'runtime', // https://www.npmjs.com/package/@rollup/plugin-babel#babelhelpers
			plugins: [
				'babel-plugin-styled-components',
				['@babel/plugin-transform-runtime', { corejs: 2 }], // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
			],
			presets: [
				['@babel/preset-env', { modules: false }], // {modules: false} means ES modules will be preserved.
				['@babel/preset-react', { runtime: 'automatic' }],
			],
		}),
		commonjs(), //seems this has to come last???
	],
};

export default config;
