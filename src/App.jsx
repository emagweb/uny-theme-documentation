import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Theme } from './pages/Theme'
import { Builder } from './pages/Builder'
import { Assistant } from './pages/Assistant'
import { Reference } from './pages/Reference'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { Cookies } from './pages/Cookies'
import { Error } from './pages/Error'

/**
 * Where a page opens.
 *
 * Two things a router does not do on its own, and both put the reader in the wrong place.
 *
 * With a hash, the browser looks for the target while React is still mounting, finds no
 * element with that id and settles on the top of the document. A link like
 * /builder#settings opened the right page at the wrong section - true for a link followed
 * from another page and for an address pasted into the bar. The scroll happens here
 * instead, after the page is painted and the section exists. How far below the fixed
 * header it stops is not decided here: `scroll-margin-top` on the target does that, so a
 * native jump and this one land on the same line.
 *
 * Without a hash, the window keeps the offset it had on the page you came from, so
 * following a menu item from halfway down a long guide opened the next one halfway down
 * as well. A new page starts at its beginning, and instantly: the smooth behaviour set
 * globally would otherwise animate a scroll of several thousand pixels.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])
  return null
}

const App = () => {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='theme' element={<Theme />} />
        <Route path='builder' element={<Builder />} />
        <Route path='assistant' element={<Assistant />} />
        <Route path='reference' element={<Reference />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}
export { App }
