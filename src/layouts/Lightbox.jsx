import React from 'react';
import { styled } from 'linaria/react';

const LightboxWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: 100vh;

  color: var(--light-grey);

  background-color: rgba(20, 20, 20, 0.9);

  > .wrapper {
    height: 100%;
  }
`;

const Lightbox = ({ children }) => (
  <LightboxWrapper>
    <div className="wrapper">{children}</div>
  </LightboxWrapper>
);

export default Lightbox;
