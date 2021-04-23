import hydrate from 'preact-iso/hydrate'
import { LocationProvider, Router } from 'preact-iso/router'
import lazy, { ErrorBoundary } from 'preact-iso/lazy'

import Home from './pages/home'
import NotFound from './pages/_404'
import { initAnalytics } from './lib/analytics'

const Wishlist = lazy(() => import('./pages/wishlist'))

if (process.env.NODE_ENV !== 'development') {
  initAnalytics()
}

export function App() {
  return (
    <>
      {/* Fake link to enable prerendering */}
      <a href="/404" className="hidden">
        404
      </a>
      <a href="/wishlist" className="hidden">
        wishlist
      </a>
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
  const { default: render } = await import('preact-iso/prerender')
  return await render(<App {...data} />)
}
