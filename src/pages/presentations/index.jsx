import React from 'react';
import Layout from '~src/layouts/Layout';

function PresentationsPage({ location }) {
  return (
    <Layout location={location}>
      <p>Презентации</p>
      <a href="https://albertmolodec.github.io/presentations/reverse-engineering">
        Анализ неизвестных GATT-характеристик Bluetooth-устройства
      </a>
    </Layout>
  );
}

export default PresentationsPage;
