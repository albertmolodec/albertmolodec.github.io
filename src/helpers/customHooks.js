/* eslint-disable import/prefer-default-export */

import { useStaticQuery, graphql } from 'gatsby';

export function useBuildTime() {
  const data = useStaticQuery(graphql`
    query Info {
      site {
        buildTime(formatString: "hh:mm DD.MM.YYYY")
      }
    }
  `);

  return data.site.buildTime;
}
