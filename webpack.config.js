const path = require("path");

module.exports = {
  // Your webpack configuration goes here...

  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },
};
