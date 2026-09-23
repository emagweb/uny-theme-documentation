import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
