import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { styled } from 'linaria/react';

import Navigation from '~src/components/Navigation';
import Footer from '~src/components/Footer';

const StyledLayout = styled.div`
  display: grid;

  grid-template-rows: [navigation] auto [body] 1fr;
  min-height: 100vh;

  @media (max-width: 48rem) {
    grid-template-rows:
      [body] calc(100vh - 44px)
      [navigation] auto;
  }
`;

const PageNavigation = styled.nav`
  grid-row: navigation;

  @media (max-width: 48rem) {
    position: fixed;

    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const PageBody = styled.div`
  display: grid;
  grid-row: body;
  grid-template-rows: [main] 1fr [footer] auto;

  overflow-y: auto;
`;

const PageMain = styled.main`
  grid-row: main;
`;

const PageFooter = styled.footer`
  grid-row: footer;
`;

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
      <StyledLayout>
        <PageNavigation>
          <Navigation />
        </PageNavigation>
        <PageBody>
          <div className="wrapper">
            <PageMain>{children}</PageMain>
          </div>
          <PageFooter className="page-footer">
            <Footer />
          </PageFooter>
        </PageBody>
      </StyledLayout>
    )}
  />
);

export default Layout;
