import React from 'react';
import { useBuildTime } from '~src/helpers/customHooks';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <div className="footer-wrapper">
      <small>Последняя сборка: {buildTime}</small>
    </div>
  );
}

export default Footer;
