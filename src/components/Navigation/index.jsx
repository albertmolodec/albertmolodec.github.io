import React from 'react';
import NavLink from '~src/ui/NavLink';
import ThemeSwitcher from './ThemeSwitcher';
import TABS from './TABS';

import './styles.css';

function Navigation() {
  return (
    <div className="navigation-wrapper wrapper">
      <ul className="navigation-desktop-list">
        {TABS.map(tab => (
          <li className="navigation-list--item" key={tab.link}>
            <NavLink to={tab.link}>{tab.name}</NavLink>
          </li>
        ))}
      </ul>
      {typeof window !== `undefined` && <ThemeSwitcher />}
    </div>
  );
}

export default Navigation;
