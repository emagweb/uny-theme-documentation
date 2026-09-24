import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { App } from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/custom.sass'

/**
 * The guide is published under /documentation/ on uny-theme.dvostok.com, and the routes in
 * App.jsx are declared without that prefix - `theme`, `builder`, `reference`. Without a
 * basename the router compares the full path /documentation/builder against them, matches
 * nothing and shows its own "page doesn't exist" screen, which is what a reviewer following
 * the documentation link saw on 23 September.
 *
 * The value comes from rsbuild.config.js, where it is declared once and used both here and
 * as the asset prefix. It is empty during `yarn start`, so the dev server keeps working at
 * the root of localhost.
 */
const basename = process.env.DOCS_BASENAME || '/'

/**
 * The offline copy inside the product archive is opened straight from a folder, with no
 * server behind it, and there the history API cannot be used: a file:// URL like
 * file:///.../documentation/builder points at a file that does not exist, so the browser
 * reports a missing file instead of handing the path to the router. Keeping the route in
 * the hash - index.html#/builder - is a real address of an existing file, so it works.
 */
const offline = process.env.DOCS_ROUTER === 'hash'
const Router = offline ? HashRouter : BrowserRouter

/**
 * Body copy links to other chapters with plain anchors - <a href="/builder"> - because the
 * online build is served by Apache, which answers index.html for any path. In the hash
 * router those anchors would leave the app: the browser would look for a file named
 * `builder` beside index.html.
 *
 * Rather than rewriting twenty-one anchors across twelve files - a change that would also
 * alter the behaviour of the published build, which is already live and checked - the same
 * anchors are turned into hash navigation here, in one listener, and only in the offline
 * copy. Everything the online build does stays exactly as it is.
 *
 * Only plain left clicks on internal paths are taken. Modified clicks (new tab, download,
 * save) and anything external, mailto or already hashed are left to the browser.
 */
if (offline) {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const anchor = event.target.closest && event.target.closest('a')
    if (!anchor) return
    if (anchor.target && anchor.target !== '_self') return
    if (anchor.hasAttribute('download')) return

    const href = anchor.getAttribute('href')
    if (!href || !href.startsWith('/')) return

    event.preventDefault()
    window.location.hash = '#' + href
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename={offline ? '/' : basename}>
      <App />
    </Router>
  </React.StrictMode>,
)
