import { FunctionComponent } from 'preact'

const Layout: FunctionComponent<{ className?: string }> = ({
  children,
  className = '',
}) => {
  const layoutClass =
    'mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32' +
    className

  return <main className={layoutClass}>{children}</main>
}

export default Layout
