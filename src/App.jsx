import { Routes, Route } from 'react-router-dom'
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { Cookie } from './pages/Cookie'
import { Error } from './pages/Error'

const App = () => {
  useGoogleAnalytics();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='privacy-policy' element={<Privacy />} />
      <Route path='terms-of-use' element={<Terms />} />
      <Route path='cookie-policy' element={<Cookie />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export { App }