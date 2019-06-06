import React from 'react';

import './styles.css';

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

export default Button;
