import React from 'react';
import { useBuildTime } from '../helpers/customHooks';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <div>
      <small style={{ color: "#aaa" }}>Последний билд: {buildTime}</small>
    </div>
  );
}

export default Footer;
