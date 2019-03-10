import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page not found</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default NotFoundPage;
