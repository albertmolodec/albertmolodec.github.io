/* eslint-disable import/prefer-default-export */

import { useStaticQuery, graphql } from 'gatsby';
import { format } from 'date-fns';

export function useBuildTime() {
  const data = useStaticQuery(graphql`
    query Info {
      site {
        buildTime
      }
    }
  `);

  const localBuildTime = format(
    new Date(data.site.buildTime),
    'HH:mm dd.MM.yyyy',
  );

  return localBuildTime;
}
