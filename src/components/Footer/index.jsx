import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from '~src/ui/Link';
import useBuildTime from '~src/hooks/useBuildTime';
import helloSvg from '~src/assets/images/hello.svg';

import './styles.css';

function Footer() {
  const buildTime = useBuildTime();

  const {
    site: {
      siteMetadata: { social: socialLinks },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            Email
            Github
            Codepen
            Twitter
            Instagram
            Facebook
            Moikrug
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
      {/* <small>Последняя сборка: {buildTime}</small> */}
    </div>
  );
}

export default Footer;
