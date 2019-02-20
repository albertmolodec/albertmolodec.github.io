import React from 'react';
import Layout from '../layouts/Layout';

function TravelPage(props) {
  return (
    <Layout location={props.location}>
      <p>Путешествия</p>
    </Layout>
  );
}

export default TravelPage;
