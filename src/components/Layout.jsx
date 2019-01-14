import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    console.log(this.props);
    const rootPath = `${__PATH_PREFIX__}/`;
    console.log(rootPath);

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'ru' }}
          // TO DO: meta={[{ name: 'description', content: siteDescription }]}
          meta={[{ name: 'description' }]}
          title={title}
        />
        <div>
          {children}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
