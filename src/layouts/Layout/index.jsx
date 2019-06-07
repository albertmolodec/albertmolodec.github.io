import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from '~src/components/Navigation';
import Footer from '~src/components/Footer';
import './styles.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className="layout">
        <nav className="page-navigation">
          <Navigation />
        </nav>
        <div className="page-body">
          <main>{children}</main>
          <footer className="page-footer">
            <Footer />
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
