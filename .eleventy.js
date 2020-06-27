const md = require("markdown-it")();

const sizes = [
  { res: "_600x600", target: "600w" },
  { res: "_800x600", target: "800w" },
  { res: "_1024x576", target: "1024w" },
];

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("md", (text) => text && md.render(text));
  eleventyConfig.addShortcode(
    "img",
    (dir, file, {className="", alt = ""}) =>
      `<img src="/img/${dir}/${file}" class="${className}" srcset="${sizes.map(
        (size) => `/img/${dir}/${size.res}/${file} ${size.target}`
      )}" alt="${alt}"/>`
  );
  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
