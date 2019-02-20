import React from 'react';
import Animation from '../components/animation';

import Layout from '../layouts/Layout';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <p style={{ textAlign: 'center' }}>Сайт в разработке.</p>
        <Animation style={{ display: 'block', margin: '0 auto' }} />        
      </Layout>
    );
  }
}

export default IndexPage;
