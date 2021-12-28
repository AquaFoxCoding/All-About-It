const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/sass");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
