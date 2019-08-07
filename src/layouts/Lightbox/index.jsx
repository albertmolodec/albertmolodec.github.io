import React from 'react';
import './styles.css';

const Lightbox = ({ children }) => <div className="lightbox">
  <div className="wrapper">{children}</div>
</div>

export default Lightbox;
