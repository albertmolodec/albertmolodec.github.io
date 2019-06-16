import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

export default ({ ...props }) => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent, isPartiallyCurrent }) => {
        let isActive;

        if (isPartiallyCurrent) isActive = true;
        if (props.to === '/' && !isCurrent) isActive = false;

        return {
          className: isActive ? 'active' : null,
        };
      }}
    />
  );
};
