module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './app',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
