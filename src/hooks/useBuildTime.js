import { useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';

export default function useBuildTime() {
  const data = useStaticQuery(graphql`
    query Info {
      site {
        buildTime
      }
    }
  `);

  const localBuildTime = dayjs(data.site.buildTime).format('HH:mm DD.MM.YYYY');

  return localBuildTime;
}
