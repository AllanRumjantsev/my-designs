const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const md = markdownIt({ html: true, linkify: true, typographer: false });
  const mdInline = markdownIt({ html: false, linkify: true, typographer: false });
  const markdownCache = new Map();

  const passthroughPaths = [
    "banners",
    // "EXTERNAL PICS",
    "favicon",
    "images",
    "personal",
    // "plinko-single",
    "scripts",
    "slick",
    "social-media",
    "videos",
    "videos-webm",
    "web",
    "fancybox.css",
    "styles.css",
    "robots.txt",
    "sitemap.xml",
    "CNAME"
  ];

  passthroughPaths.forEach((path) => eleventyConfig.addPassthroughCopy(path));

  eleventyConfig.addFilter("renderMdFile", (relativeFilePath) => {
    if (!relativeFilePath) {
      return "";
    }

    const normalizedPath = relativeFilePath.replace(/\\/g, "/");
    if (markdownCache.has(normalizedPath)) {
      return markdownCache.get(normalizedPath);
    }

    const absolutePath = path.join(process.cwd(), normalizedPath);
    const markdownSource = fs.readFileSync(absolutePath, "utf8");
    const trimmed = markdownSource.trimStart();
    const renderedHtml = trimmed.startsWith("<")
      ? markdownSource
      : md.render(markdownSource);
    markdownCache.set(normalizedPath, renderedHtml);

    return renderedHtml;
  });

  eleventyConfig.addFilter("renderMdInline", (text) => {
    if (text === null || text === undefined) {
      return "";
    }
    return mdInline.renderInline(String(text));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
