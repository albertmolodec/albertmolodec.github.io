import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function ProjectsPage({ location }) {
  const {
    allSitePage: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allSitePage(filter: {path: {regex: "/^\/projects\/\\w/"}}) {
          edges {
            node {
              path
              id
            }
          }
        }
      }
    `,
  );

  return (
    <Layout location={location}>
      <SEO
        title="Проекты"
        keywords={[`проекты`, `gatsby`, `albertmolodec`, `react`]}
      />
      <h1>Проекты</h1>
      <ol style={{ listStyle: 'decimal', marginLeft: '1em' }}>
        {edges.map(edge => {
          return (
            <li key={`id-${edge.node.id}`}>
              <Link to={`${edge.node.path}`}>{edge.node.path}</Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}

export default ProjectsPage;
