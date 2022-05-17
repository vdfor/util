export default [
  {
    entry: 'src/index.ts',
    esm: {
      type: 'babel',
    },
  },
  {
    entry: 'src/index.ts',
    cjs: {
      type: 'babel',
    },
  },
  {
    entry: 'src/index.ts',
    umd: {
      minFile: true,
      file: 'index',
    },
  },
];
