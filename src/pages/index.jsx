import React from 'react';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Animation from '../components/animation';

import avatar from '../assets/images/low-poly-avatar.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]} />
    <img src={avatar} alt="Мой низкополигональный портрет" />
    <p>Сайт в разработке</p>
    <Animation style={{ display: 'block', margin: '20px 0' }} />
  </Layout>
);

export default IndexPage;
