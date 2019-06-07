import React from 'react';
import useBuildTime from '~src/hooks/useBuildTime';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <div className="footer-wrapper wrapper">
      <small>Последняя сборка: {buildTime}</small>
    </div>
  );
}

export default Footer;
