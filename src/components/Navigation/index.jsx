import React from 'react';
import NavLink from '~src/components/NavLink';
import Button from '~src/ui/Button';
import themeSwitcherSvg from '~src/assets/images/theme-switcher.svg';
import TABS from './tabs';

import './styles.css';

function Navigation() {
  return (
    <div className="navigation-wrapper">
      <ul className="navigation-list">
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
