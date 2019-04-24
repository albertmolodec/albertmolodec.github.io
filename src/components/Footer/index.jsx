import React from 'react';
import { useBuildTime } from '~src/helpers/customHooks';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <footer className="page-footer">
      <small>Последняя сборка: {buildTime}</small>
    </footer>
  );
}

export default Footer;
