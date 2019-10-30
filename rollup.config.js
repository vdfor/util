import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const appDirectory = path.join(fs.realpathSync(process.cwd()), './');
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const extensions = ['.js', '.ts'];
const nodeEnv = process.env.NODE_ENV || 'development';

const commonOutputOpts = {
  dir: resolveApp('dist'),
  sourcemap: nodeEnv === 'development',
  exports: 'named',
};

export default {
  input: {
    index: resolveApp('src/index.ts'),
  },
  output: [
    {
      format: 'esm',
      entryFileNames: 'index.es.js',
      ...commonOutputOpts,
    },
    {
      format: 'commonjs',
      entryFileNames: 'index.js',
      ...commonOutputOpts,
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    eslint({
      fix: true,
    }),
    resolve({
      extensions,
      customResolveOptions: {
        moduleDirectory: [resolveApp('src')],
      },
    }),
    babel({
      exclude: /node_modules/,
      runtimeHelpers: true,
      extensions,
      babelrc: true,
    }),
  ],
};
