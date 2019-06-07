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
    <div className="main-wrapper">
      <div className="description">
        <p>Привет.</p>
        <p className="introduction">
          Меня зовут <span className="name">Альберт Абдульманов</span>. Я люблю
          код и тексты. Не люблю овощи и неудобные сайты.
        </p>
        <p>
          Я учусь на специалиста по информационной безопасности и работаю
          фронтенд-разработчиком. Раньше был главредом и верстальщиком
          факультетской газеты.
        </p>
        <p>Родился в Чусовом, живу в Перми и люблю путешествовать.</p>
      </div>
      <img
        className="image"
        src={avatar}
        alt="Мой низкополигональный портрет"
      />
    </div>
  </Layout>
);

export default IndexPage;
