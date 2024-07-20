const path = require('path');

module.exports = {
mode: 'development', // or 'production'
entry: './src/index.js', // Adjust the entry point to your main file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
      // your existing webpack configuration
      resolve: {
        fallback: {
          "url": require.resolve("url/"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "util": require.resolve("util/"),
          "fs": false,  // Use false if you don't need fs in the browser
          // Add other polyfills here if necessary
          "path": require.resolve("path-browserify"),
          "stream": require.resolve("stream-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "querystring": require.resolve("querystring-es3"),
          "timers": require.resolve("timers-browserify"),
          "buffer": require.resolve("buffer/"),
          "os": require.resolve("os-browserify"),
          "tls": require.resolve("tls-browserify"),
          "assert": require.resolve("assert/"),
          "net": require.resolve("net-browserify"),
          "dns": false, // Use false to ignore the dns module
          "vm": require.resolve("vm-browserify"),
          "async_hooks": false, // Use false to ignore the async_hooks module
          "child_process": false, // Use false to ignore the child_process module
        }
      },
        // Other configurations
  ignoreWarnings: [
    {
      module: /express\/lib\/view\.js/,
      message: /Critical dependency: the request of a dependency is an expression/,
    },
  ],
  output: {
    path: path.resolve(__dirname, 'public'), // Ensure this matches the expected output directory
    filename: 'bundle.js',
  },
};
