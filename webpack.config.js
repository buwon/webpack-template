const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

function generateEntry() {
  const entry = {
    app: path.join(process.cwd(), 'src', 'index.ts'),
  };

  const testPath = path.join(process.cwd(), 'test', 'index.spec.ts');
  if (fs.existsSync(testPath)) {
    entry.test = testPath;
  }

  return entry;
}

module.exports = {
  entry: generateEntry(),

  output: {
    filename: '[name]/[name].js',
    path: path.join(process.cwd(), 'dist'),
  },

  resolve: {
    extensions: ['.js', '.json', '.ts'],
    alias: {
      '~~': path.join(process.cwd()),
      '~': path.join(process.cwd(), 'src'),
    },
  },

  target: 'node',
  stats: 'normal',
  mode: 'production',
  devtool: false,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  externals: [nodeExternals()],

  plugins: [],
};
