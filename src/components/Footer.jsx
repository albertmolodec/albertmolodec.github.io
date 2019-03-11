import React from 'react';
import { useBuildTime } from '../helpers/customHooks';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <footer>
      <small>Последняя сборка: {buildTime}</small>
    </footer>
  );
}

export default Footer;
