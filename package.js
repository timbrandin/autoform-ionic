Package.describe({
  name: "timbrandin:autoform-ionic",
  summary: "Ionic theme for Autoform",
  version: "0.1.5",
  git: "https://github.com/timbrandin/autoform-ionic"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(["templating", "underscore"], "client");
  api.use("aldeed:autoform@5.3.0");
  api.addFiles([
    "ionic.html",
    "ionic.css",
    "ionic.js"
  ], "client");
});
