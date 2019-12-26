import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

import './styles.css';

function SheetsExportPage({ location }) {
  // const { allGoogleSheetExampleSheetRow } = useStaticQuery(
  //   graphql`
  //     query {
  //       allGoogleSheetExampleSheetRow {
  //         nodes {
  //           name
  //           age
  //           issuperstar
  //         }
  //       }
  //     }
  //   `,
  // );

  // const tableData = allGoogleSheetExampleSheetRow.nodes;
  // const tableHeaders = Object.keys(tableData[0]);
  // const tableValues = tableData.map(row => Object.values(row));

  return (
    <Layout location={location}>
      <SEO title="Экспорт данных из Google Sheets" />
      <h1>Экспорт данных из Google Sheets</h1>
      <p>
        Not today
      </p>
      {/* <p>
        Экспортирую данные из{' '}
        <a href="https://docs.google.com/spreadsheets/d/1-O2ZpXMRqKgarXVoK27MptqneqK8tWUBw13oCLDmBHA/edit?usp=sharing">
          этого
        </a>{' '}
        гугл шита.
      </p>
      <table className="sheet-table">
        <thead>
          <tr>
            {tableHeaders.map(colHeader => (
              <th key={colHeader}>{colHeader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableValues.map(rowValues => (
            <tr key={rowValues[0]}>
              {rowValues.map(cellValue => (
                <td key={cellValue}>{cellValue.toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </Layout>
  );
}

export default SheetsExportPage;
