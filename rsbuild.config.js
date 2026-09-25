import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { ImageMinimizerPlugin } from "@rsbuild/plugin-image-compress";

// Two targets, because the guide is delivered two ways.
//
//   online  (default) - published at https://uny-theme.dvostok.com/documentation/ and
//                       served by Apache, so paths are absolute and the router uses the
//                       history API. This is what `yarn build` produces.
//   offline           - a copy that travels inside the product archive and is opened by
//                       double-clicking index.html. There is no server, so every path has
//                       to be relative and the router has to live in the URL hash: with
//                       the history API a file:// URL such as file:///.../builder is a
//                       file that does not exist, and the browser shows a download error
//                       rather than the page.
//
// Build the offline copy with: DOCS_TARGET=offline yarn build
const OFFLINE = process.env.DOCS_TARGET === "offline";

// Where the built guide is served from. The router needs it as its basename and rsbuild
// needs it as the asset prefix, so it is declared once here.
//
// Empty during `yarn start`, so the dev server keeps working at the root of localhost,
// and empty offline, where there is no prefix to speak of.
const BASE =
  !OFFLINE && process.env.NODE_ENV === "production" ? "/documentation" : "";

// The offline copy is written next to the online one rather than over it, so a build for
// the archive never destroys the build that is about to be published.
const DIST = OFFLINE ? "build-offline" : "build";

// Which edition of the product the text describes. They differ in one thing only: how the
// two bundled plugins are installed. The edition sold with a licence key downloads them
// from our server after the code is entered; the GPL edition ships them as zip files in
// the archive and has no licence screen at all. Saying the wrong one sends the buyer
// looking for a screen that is not there.
const EDITION = process.env.DOCS_EDITION || (OFFLINE ? "gpl" : "licensed");

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: "./src/index.jsx",
    },

    // rsbuild does NOT provide process.env.PUBLIC_URL of its own accord - the first attempt
    // relied on it and the name survived into the bundle unreplaced, leaving the basename
    // empty. Defined explicitly instead.
    define: {
      "process.env.DOCS_BASENAME": JSON.stringify(BASE),
      "process.env.DOCS_ROUTER": JSON.stringify(OFFLINE ? "hash" : "browser"),
      "process.env.DOCS_EDITION": JSON.stringify(EDITION),
    },
  },
  html: {
    template: "./public/index.html",
  },
  tools: {
    rspack: {
      optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            use: "jpeg",
            test: /\.(?:jpg|jpeg)$/,
          }),
          new ImageMinimizerPlugin({
            use: "png",
            test: /\.png$/,
          }),
          new ImageMinimizerPlugin({
            use: "avif",
            test: /\.avif$/,
          }),
          new ImageMinimizerPlugin({
            use: "ico",
            test: /\.(?:ico|icon)$/,
          }),
        ],
      },
    },
  },
  output: {
    distPath: { root: DIST },

    // The guide is served from https://uny-theme.dvostok.com/documentation/, not from the
    // root of a domain. Without this, rsbuild writes absolute paths such as
    // /static/js/index.js, the browser asks the ROOT of the host for them, gets 404, and
    // the page renders blank - which is exactly what happened on 23 September: the
    // documentation link in the item description led to an empty white page while
    // index.html itself answered 200, so a plain status check saw nothing wrong.
    // Offline the page is opened from a folder, so paths have to be relative to index.html.
    // An absolute "/static/..." would be read as the root of the disk.
    assetPrefix: OFFLINE ? "./" : BASE ? BASE + "/" : "/",
  },
});
