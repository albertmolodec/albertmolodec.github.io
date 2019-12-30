import React from 'react';
import { css } from 'linaria';
import { Link } from 'gatsby';

const NavLink = ({ active, ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      let isActive;

      if (isPartiallyCurrent) isActive = true;
      if (props.to === '/' && !isCurrent) isActive = false;

      return {
        className:
          isActive &&
          css`
            font-weight: bold;
          `,
      };
    }}
  />
);

export default NavLink;
