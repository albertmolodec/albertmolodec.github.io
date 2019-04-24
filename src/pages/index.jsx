import React from 'react';

import Animation from '~src/components/animation';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

import avatar from '~src/assets/images/low-poly-avatar.png';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Главная"
      keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]}
    />
    <img src={avatar} alt="Мой низкополигональный портрет" />
    <p>Сайт в разработке</p>
    <Animation style={{ display: 'block', margin: '20px 0' }} />
  </Layout>
);

export default IndexPage;
