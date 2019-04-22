import React from 'react';
import Layout from '~src/layouts/Layout';

function TravelPage({ location }) {
  return (
    <Layout location={location}>
      <p>Путешествия</p>
    </Layout>
  );
}

export default TravelPage;
