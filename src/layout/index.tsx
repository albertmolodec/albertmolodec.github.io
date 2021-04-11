import { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
      <main>{children}</main>
    </div>
  )
}

export default Layout
