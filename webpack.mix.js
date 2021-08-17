const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/app.js", "public/js")
  .vue()
  .postCss("src/css/app.css", "public/css", [
    tailwindcss("./tailwind.config.js"),
  ])
  .browserSync({
    files: ["public/**/*.html", "public/**/*.css", "public/**/*.js"],
    server: {
      baseDir: "public",
      index: "index.html",
    },
  });
