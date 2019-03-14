# React Webpack Starter

This is a boilerplate for React 16 & Webpack 4.

It includes webpack-dev-server, babel, file-loader,css and scss loader.

## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

## App Info

### Author

Denish Rana

### Version

1.0.0

### things you need to know

## webpack-dev-server:

The webpack-dev-server provides you with a simple web server and the ability to use live reloading.

## clean-webpack-plugin:

A webpack plugin to remove/clean your build folder(s).

By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

## html-webpack-plugin:

if we changed the name of one of our entry points, or even added a new one, the generated bundles would be renamed on a build, but our index.html file would still reference the old names

HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in the dist/ folder. This means that it will replace our index.html file with a newly generated one.

## mini-css-extract-plugin:

This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

It builds on top of a new webpack v4 feature (module types) and requires webpack 4 to work.

## HotModuleReplacementPlugin:

Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh.
