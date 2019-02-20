import React, { useState } from 'react';
import { Link } from 'gatsby';

function Header(props) {
  const tabs = [
    {
      type: 'main',
      name: 'Главная',
      link: '/',
    },
    {
      type: 'projects',
      name: 'Проекты',
      link: '/projects',
    },
    {
      type: 'blog',
      name: 'Блог',
      link: '/blog',
    },
    {
      type: 'travel',
      name: 'Путешествия',
      link: '/travel',
    },
    {
      type: 'lists',
      name: 'Списки',
      link: '/lists',
    },
  ];
  
  const { location } = props;
  const activeTab = location.pathname.split('/')[1];

  return (
    <nav>
      <ul>
        {tabs.map(tab => (
          <li key={tab.type}>
            <Link to={tab.link}>
              {tab.name} {activeTab === tab.type && '«'}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
