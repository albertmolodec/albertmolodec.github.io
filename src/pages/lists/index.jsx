import React from 'react';
import { Link } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function ListsPage({ location }) {
  return (
    <Layout location={location}>
      <SEO
        title="Списки"
        keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]}
      />
      <p>Списки</p>
      <Link to="/lists/travel">Путешествия</Link>
    </Layout>
  );
}

export default ListsPage;
