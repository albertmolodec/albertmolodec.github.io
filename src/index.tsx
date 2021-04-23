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
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Home path="/" />
          <Wishlist path="/wishlist" />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

hydrate(<App />)

export async function prerender(data) {
  const { default: render } = await import('preact-iso/prerender')
  return await render(<App {...data} />)
}
