import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from 'linaria/react';

import Link from '~src/ui/Link';
import helloSvg from '~src/assets/images/hello.svg';

const Footer = () => {
  const {
    site: {
      siteMetadata: { social: socialLinks },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            email
            github
            codepen
            twitter
            instagram
            facebook
            linkedin
            moikrug
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper className="wrapper">
      <HelloImg src={helloSvg} alt="Мои контакты" />
      <Contacts>
        {Object.entries(socialLinks).map(link => (
          <ContactItem key={link[0]}>
            <Link href={link[1]}>{link[0]}</Link>
          </ContactItem>
        ))}
      </Contacts>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
`;

const HelloImg = styled.img`
  margin-right: 0.5em;
`;

const Contacts = styled.ul`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  min-height: 1.625em;
`;

const ContactItem = styled.li`
  padding: 0.2em 0.5em;

  text-transform: capitalize;
`;

export default Footer;
