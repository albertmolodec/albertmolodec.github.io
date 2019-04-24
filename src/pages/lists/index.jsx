import React from 'react';
import { Link } from 'gatsby';
import Layout from '~src/layouts/Layout';

function ListsPage({ location }) {
  return (
    <Layout location={location}>
      <p>Списки</p>
      <Link to="/lists/travel">Путешествия</Link>
    </Layout>
  );
}

export default ListsPage;
