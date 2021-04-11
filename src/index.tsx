import hydrate from 'preact-iso/hydrate'
import { LocationProvider, Router } from 'preact-iso/router'
import lazy, { ErrorBoundary } from 'preact-iso/lazy'
import Home from './pages/home'
import NotFound from './pages/_404'

const Wishlist = lazy(() => import('./pages/wishlist'))

export function App() {
  return (
    <LocationProvider>
      <div>
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <Wishlist path="/wishlist" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  )
}

hydrate(<App />)

export async function prerender(data) {
  const { default: prerender } = await import('preact-iso/prerender')
  return await prerender(<App {...data} />)
}
