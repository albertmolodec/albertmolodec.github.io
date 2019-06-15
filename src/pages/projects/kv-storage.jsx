import React from 'react';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function KVStoragePage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Эксперименты с KV Storage" />
      <h1>Эксперименты с KV Storage</h1>
    </Layout>
  );
}

export default KVStoragePage;
