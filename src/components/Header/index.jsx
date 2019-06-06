import React from 'react';
import NavLink from '~src/components/NavLink';
import Button from '~src/ui/Button';
import sunSvg from '~src/assets/images/sun.svg';
import TABS from './tabs';

import './styles.css';

function Header() {
  return (
    <header className="page-header">
      <nav>
        <ul className="nav">
          {TABS.map(tab => (
            <li className="nav-item" key={tab.link}>
              <NavLink to={tab.link}>{tab.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button>
        <img src={sunSvg} alt="Изменить тему" />
      </Button>
    </header>
  );
}

export default Header;
