import React from 'react';
import { useBuildTime } from '../helpers/customHooks';

function Footer() {
  const buildTime = useBuildTime();

  return (
    <div>
      <small style={{ color: "#555" }}>Последний билд: {buildTime}</small>
    </div>
  );
}

export default Footer;
