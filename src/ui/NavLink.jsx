import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ active, ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      let isActive;

      if (isPartiallyCurrent) isActive = true;
      if (props.to === '/' && !isCurrent) isActive = false;

      return {
        active: isActive,
      };
    }}
    // FIXME: not working
    style={{ fontWeight: active ? 'bold' : 'normal' }}
  />
);

export default NavLink;
