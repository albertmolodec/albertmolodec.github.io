import React from 'react';
import useWindowWidth from '~src/hooks/useWindowWidth';
import NavLink from '~src/ui/NavLink';
import Button from '~src/ui/Button';
import themeSwitcherSvg from '~src/assets/images/theme-switcher.svg';
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
      <Button>
        <img src={themeSwitcherSvg} alt="Изменить тему" />
      </Button>
    </div>
  );
}

export default Navigation;
