import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'ru' }}
          meta={[{ name: 'description' }]}
          title={title}
        />
        <Header location={location}/>
        <div>{children}</div>
      </Fragment>
    );
  }
}

export default Layout;
