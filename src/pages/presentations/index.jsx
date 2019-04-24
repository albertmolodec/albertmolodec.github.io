import React from 'react';
import Layout from '~src/layouts/Layout';

function PresentationsPage({ location }) {
  return (
    <Layout location={location}>
      <p>Презентации</p>
      <a to="/presentations/reverse-engineering">
        Анализ неизвестных GATT-характеристик Bluetooth-устройства
      </a>
    </Layout>
  );
}

export default PresentationsPage;
