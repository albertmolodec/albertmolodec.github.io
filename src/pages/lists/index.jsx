import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layouts/Layout';

function ListsPage(props) {
  return (
    <Layout location={props.location}>
      <p>Списки</p>
      <Link to="/lists/travel">Путешествия</Link>
    </Layout>
  );
}

export default ListsPage;
