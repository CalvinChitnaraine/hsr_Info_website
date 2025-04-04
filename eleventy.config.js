const ghostContentAPI = require("@tryghost/content-api");

// Initialize Ghost API
const api = new ghostContentAPI({
  url: "http://127.0.0.1:2368",
  key: "6587278d3e2e14c4f51ccd088a",
  version: "v5.0",
});

module.exports = function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.addPassthroughCopy("images");

  // Fetch character data for each area from Ghost CMS
  eleventyConfig.addGlobalData("PenaconyCharacters", () =>
    api.posts.browse({ filter: "tag:penacony" }).catch((err) => {
      console.error(err);
    })
  );
  eleventyConfig.addGlobalData("HertaSSCharacters", () =>
    api.posts.browse({ filter: "tag:hertass" }).catch((err) => {
      console.error(err);
    })
  );
  eleventyConfig.addGlobalData("XianzhouLuofuCharacters", () =>
    api.posts.browse({ filter: "tag:xianzhouluofu" }).catch((err) => {
      console.error(err);
    })
  );
};
