import React from 'react';
import { Link } from 'gatsby';
import Layout from '~src/layouts/Layout';

function ProjectsPage({ location }) {
  return (
    <Layout location={location}>
      <p>Проекты</p>
      <Link to="/projects/experiments">Эксперименты</Link>
    </Layout>
  );
}

export default ProjectsPage;
