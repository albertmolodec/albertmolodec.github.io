import {
  lazy,
  Router,
  hydrate,
  ErrorBoundary,
  LocationProvider,
  prerender as ssr,
} from 'preact-iso'

import Home from './pages/home'
import NotFound from './pages/_404'
import { initAnalytics } from './lib/analytics'
import Header from './components/header'

const Wishlist = lazy(() => import('./pages/wishlist'))

if (process.env.NODE_ENV !== 'development') {
  initAnalytics()
}

export function App() {
  return (
    <>
      <Header />
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <Wishlist path="/wishlist" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </>
  )
}

hydrate(<App />)

export async function prerender(data) {
  return ssr(<App {...data} />)
}
