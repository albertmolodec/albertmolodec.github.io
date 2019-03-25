import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Страница не найдена" />
    <h1>Страница не найдена</h1>
    <Link to="/">На главную</Link>
  </Layout>
);

export default NotFoundPage;
