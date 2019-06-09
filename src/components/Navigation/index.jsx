import React from 'react';
import useWindowWidth from '~src/hooks/useWindowWidth';
import NavLink from '~src/ui/NavLink';
import ThemeSwitcher from './components/ThemeSwitcher';
import TABS from './TABS';

import './styles.css';

function Navigation() {
  const windowWidth = useWindowWidth();

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
