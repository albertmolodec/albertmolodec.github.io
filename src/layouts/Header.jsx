import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = props => {
  const partiallyActive = className => ({ isPartiallyCurrent }) => ({
    className: className + (isPartiallyCurrent ? ` active` : ``),
  })
  
  const PartiallyActiveLink = ({ className, ...rest }) => (
    <Link getProps={partiallyActive(className)} {...rest} />
  )

  const tabs = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Проекты',
      link: '/projects/',
    },
    {
      name: 'Блог',
      link: '/blog/',
    },
    {
      name: 'Путешествия',
      link: '/travel/',
    },
    {
      name: 'Списки',
      link: '/lists/',
    },
  ];

  const { siteTitle } = props;

  return (
    <nav>
      <b>{siteTitle}</b>
      <ul>
        {tabs.map(tab => (
          <li key={tab.link}>
            <PartiallyActiveLink to={tab.link}>
              {tab.name}
            </PartiallyActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
