---
title: Тестовый пост. Пробую тут всякие штуки
date: '2019-04-22T04:41:36.000Z'
---

# Тестовый пост. Пробую тут всякие штуки

```js
  /* eslint-disable import/prefer-default-export */

import { useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';

export function useBuildTime() {
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
```