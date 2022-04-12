const path = require("path");

const { generateFonts } = require("./lib");

generateFonts(
  path.resolve(__dirname, "icons/transport"),
  path.resolve(__dirname, "dist/transport"),
  "transport",
  "icon"
);

generateFonts(
  path.resolve(__dirname, "icons/food"),
  path.resolve(__dirname, "dist/food"),
  "food",
  "icon"
);
