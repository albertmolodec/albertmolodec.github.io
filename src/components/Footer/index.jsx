import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '~src/ui/Link';
import helloSvg from '~src/assets/images/hello.svg';

import './styles.css';

function Footer() {
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
    <div className="footer-wrapper wrapper">
      <img src={helloSvg} alt="Мои контакты" className="hello-img" />
      <ul className="contacts">
        {Object.entries(socialLinks).map(link => {
          return (
            <li className="contact-item" key={link[0]}>
              <Link href={link[1]}>{link[0]}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
