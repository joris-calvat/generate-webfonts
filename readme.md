# generate webfonts

This project shows how to generate webfonts icons libraries from folders containing svg files.

The following folders [./icons/transport](./icons/transport) and [./icons/food](./icons/food) contain svg files I picked up from https://fonts.google.com/icons

You can check the generated results

- [./dist/transport/index.html](./dist/transport/index.html)
- [./dist/food/index.html](./dist/food/index.html)

## install

```
npm install
```

## How does it works ?

I'm using the library [@vusion/webfonts-generator](https://www.npmjs.com/package/@vusion/webfonts-generator)

It is just wrapped at my convenience to simplify the task

## Use it

```
const path = require("path");
const { generateFonts } = require("./lib");


# use the following function to generate a webfont
generateFonts(
  path.resolve(__dirname, "icons/transport"),
  path.resolve(__dirname, "dist/transport"),
  "transport",
  "icon"
);
```

## Documentation

```
generateFonts(
  srcFolder,
  distFolder,
  name,
  prefix
);
```

srcFolder => folder containing the svg files

distFolder => folder to push the code generated

name => name you want to give to the webfont

prefix => prefix each icon, usually "icon"
