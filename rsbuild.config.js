import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { ImageMinimizerPlugin } from "@rsbuild/plugin-image-compress";

// Where the built guide is served from. The router needs it as its basename and rsbuild
// needs it as the asset prefix, so it is declared once here.
//
// Empty during `yarn start`, so the dev server keeps working at the root of localhost.
const BASE = process.env.NODE_ENV === "production" ? "/documentation" : "";

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: './src/index.jsx',
    },

    // rsbuild does NOT provide process.env.PUBLIC_URL of its own accord - the first attempt
    // relied on it and the name survived into the bundle unreplaced, leaving the basename
    // empty. Defined explicitly instead.
    define: {
      'process.env.DOCS_BASENAME': JSON.stringify(BASE),
    },
  },
  html: {
    template: './public/index.html'
  },
  tools: {
    rspack: {
      optimization: {
        minimizer: [
          '...',
          new ImageMinimizerPlugin({
            use: 'jpeg',
            test: /\.(?:jpg|jpeg)$/
          }),
          new ImageMinimizerPlugin({
            use: 'png',
            test: /\.png$/
          }),
          new ImageMinimizerPlugin({
            use: 'avif',
            test: /\.avif$/
          }),
          new ImageMinimizerPlugin({
            use: 'ico',
            test: /\.(?:ico|icon)$/,
          }),
        ],
      },
    },
  },
  output: {
    distPath: { root: "build" },

    // The guide is served from https://uny-theme.dvostok.com/documentation/, not from the
    // root of a domain. Without this, rsbuild writes absolute paths such as
    // /static/js/index.js, the browser asks the ROOT of the host for them, gets 404, and
    // the page renders blank - which is exactly what happened on 23 September: the
    // documentation link in the item description led to an empty white page while
    // index.html itself answered 200, so a plain status check saw nothing wrong.
    assetPrefix: BASE ? BASE + "/" : "/",
  }
});