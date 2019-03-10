import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Animation from '../components/animation';

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]} />
    <p>Сайт в разработке</p>
    <Animation style={{ display: 'block', margin: '20px 0' }} />
  </Layout>
);

export default IndexPage;
