import React from 'react';
import { styled } from 'linaria/react';

const A = styled.a`
  padding: 0.3em;

  text-decoration: underline;

  transition: background-color, color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &:focus {
    color: var(--background-color);

    background-color: var(--primary-color);
    border-radius: 4px;
  }
`;

export default ({ href, children, ...props }) => (
  <A href={href} {...props}>
    {children}
  </A>
);
