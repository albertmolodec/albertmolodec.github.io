import React from 'react';
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
          <div className="wrapper">
            <main>{children}</main>
          </div>
          <footer className="page-footer">
            <Footer />
          </footer>
        </div>
      </div>
    )}
  />
);

export default Layout;
