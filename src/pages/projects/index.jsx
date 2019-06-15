import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function ProjectsPage({ location }) {
  const {
    allFile: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            relativeDirectory: { eq: "projects" }
            name: { ne: "index" }
          }
        ) {
          nodes {
            name
            id
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
        {nodes.map(node => {
          return (
            <li key={`id-${node.id}`}>
              <Link to={`/projects/${node.name}`}>{node.name}</Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}

export default ProjectsPage;
