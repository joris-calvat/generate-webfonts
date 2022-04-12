const webfontsGenerator = require("@vusion/webfonts-generator");
const path = require("path");
const fs = require("fs");

const getFiles = (dir) => {
  let dirCont = fs.readdirSync(dir);
  let files = dirCont.filter((elm) => {
    return elm.match(/.*\.(svg)/gi);
  });
  return files.map((file) => {
    return path.resolve(dir, file);
  });
};

const generateFonts = (
  srcFolder,
  distFolder,
  name = "custom",
  prefix = "icon"
) => {
  const options = {
    classPrefix: `${prefix}-${name}-`,
    baseSelector: `.${prefix}-${name}`,
  };
  webfontsGenerator(
    {
      fontName: name,
      types: ["eot", "woff2", "woff", "ttf", "svg"],
      files: getFiles(srcFolder),
      dest: distFolder,
      cssTemplate: path.resolve(__dirname, "css.hbs"),
      cssDest: path.resolve(distFolder, "index.css"),
      htmlDest: path.resolve(distFolder, "index.html"),
      html: true,
      templateOptions: options,
    },
    function (error) {
      if (error) {
        console.log(`Fail! Cannot generate ${name}`, error);
      } else {
        console.log(`Done! ${name} generated`);
      }
    }
  );
};

exports.generateFonts = generateFonts;
