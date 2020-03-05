const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = config => {
  require('react-app-rewire-postcss')(config, true);

  config.plugins.push(
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
  );
  return config;
};
