import React from 'react';
import { Link } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function ProjectsPage({ location }) {
  return (
    <Layout location={location}>
      <SEO
        title="Проекты"
        keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]}
      />
      <p>Проекты</p>
      <Link to="/projects/experiments">Эксперименты</Link>
    </Layout>
  );
}

export default ProjectsPage;
