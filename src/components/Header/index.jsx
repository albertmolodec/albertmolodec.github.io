import React from 'react';
import NavLink from '~src/components/NavLink';
import TABS from './tabs';

import './styles.css';

function Header() {
  return (
    <header className="page-header">
      <nav>
        <ul className="list">
          {TABS.map(tab => (
            <li className="list-item" key={tab.link}>
              <NavLink to={tab.link}>{tab.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
