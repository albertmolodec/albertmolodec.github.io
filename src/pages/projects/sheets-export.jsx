import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function SheetsExportPage({ location }) {
  const { allGoogleSheetEngRow } = useStaticQuery(
    graphql`
      query {
        allGoogleSheetEngRow {
          nodes {
            somevalue1
            somevalue2
          }
        }
      }
    `,
  );

  return (
    <Layout location={location}>
      <SEO title="Экспорт данных из Google Sheets" />
      <h1>Экспорт данных из Google Sheets</h1>
      <pre>{JSON.stringify(allGoogleSheetEngRow)}</pre>
    </Layout>
  );
}

export default SheetsExportPage;
