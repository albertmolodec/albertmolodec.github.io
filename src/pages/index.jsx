import React from 'react';

import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

import avatar from '~src/assets/images/low-poly-avatar.png';

import './styles.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Главная"
      keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]}
    />
    <p>Привет.</p>
    <p>
      Меня зовут Альберт Абдульманов. Я люблю код и тексты. Не люблю овощи и
      неудобные сайты.
    </p>
    <p>
      Я учусь на специалиста по информационной безопасности и работаю
      фронтенд-разработчиком. Раньше был главредом и верстальщиком факультетской
      газеты.
    </p>
    <p>Родился в Чусовом, живу в Перми и люблю путешествовать.</p>
    <img
      src={avatar}
      alt="Мой низкополигональный портрет"
      style={{ position: 'absolute', top: '50px', left: '-250px' }}
    />
  </Layout>
);

export default IndexPage;
