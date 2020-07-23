module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,

      splitChunks: { chunks: "all", minChunks: Infinity },
    },
  },
};
