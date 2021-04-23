import { FunctionComponent } from 'preact'
import { links } from './links'

const Header: FunctionComponent = () => {
  return (
    <header className="hidden">
      {links.map(({ href, text }) => (
        <a href={href}>{text}</a>
      ))}
    </header>
  )
}

export default Header
