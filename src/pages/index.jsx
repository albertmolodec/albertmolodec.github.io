import React from 'react';

import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

import avatarWebp from '~src/assets/images/low-poly-avatar.webp';
import avatarPng from '~src/assets/images/low-poly-avatar.png';

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
          Меня зовут <span className="name">Альберт Абдульманов</span>.
          Я&nbsp;люблю код и&nbsp;тексты. Не&nbsp;люблю овощи и&nbsp;неудобные
          сайты.
        </p>
        <p>
          У меня есть диплом специалиста по информационной безопасности, работаю
          фронтенд-разработчиком. Раньше был главредом и верстальщиком
          факультетской газеты.
        </p>
        <p>Родился в Чусовом, получил высшее образование в Перми, живу в Санкт-Петербурге, люблю путешествовать.</p>
      </div>
      <picture>
        <source type="image/webp" srcSet={avatarWebp} />
        <img
          src={avatarPng}
          className="image"
          alt="Мой низкополигональный портрет"
        />
      </picture>
    </div>
  </Layout>
);

export default IndexPage;
