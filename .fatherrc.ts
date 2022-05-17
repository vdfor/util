const common = {
  entry: 'src/index.ts',
  target: 'node',
};

export default [
  {
    ...common,
    esm: {
      type: 'babel',
    },
  },
  {
    ...common,
    cjs: {
      type: 'babel',
    },
  },
  {
    ...common,
    umd: {
      minFile: true,
      file: 'index',
    },
  },
];
