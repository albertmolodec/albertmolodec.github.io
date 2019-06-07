import React from 'react';

import './styles.css';

export default ({ href, children, ...props }) => {
  return (
    <a href={href} {...props} className="link">
      {children}
    </a>
  );
};
