const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/app.jsx',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    resolve: {
      modules: [__dirname, 'node_modules'],
      alias: {},
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/,
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  };
};
