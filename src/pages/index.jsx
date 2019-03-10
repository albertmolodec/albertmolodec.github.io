import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Animation from '../components/animation';

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" keywords={[`gatsby`, `albertmolodec`, `react`]} />
    <Link to="/">Go back to the homepage</Link>
    <Animation style={{ display: 'block', margin: '0 auto' }} />
  </Layout>
);

export default IndexPage;
