import React from 'react';
import { Link } from 'gatsby';
import Animation from '../components/animation';

import Layout from '../components/Layout';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    // const siteTitle = data.site.siteMetadata.title;

    return (
      // TO DO: <Layout location={this.props.location} title={siteTitle}>
      <Layout>
        <p style={{ textAlign: 'center' }}>Сайт в разработке.</p>
        <Animation style={{ display: 'block', margin: '0 auto' }} />
        <ul>
          <li><Link to='/projects'>Проекты</Link></li>
          <li><Link to='/blog'>Блог</Link></li>
          <li><Link to='/travel'>Путешествия</Link></li>
          <li><Link to='/lists'>Списки</Link></li>
          <li><Link to='/presentations'>Презентации</Link></li>
        </ul> 
        
      </Layout>
    );
  }
}

export default Index;
