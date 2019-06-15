import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';

function useEffectPage({ location }) {
  const [query, setQuery] = useState('react');
  const [data, setData] = useState();

  // ✅ Preserves identity until query changes
  const getFetchUrl = useCallback(() => {
    return `https://hn.algolia.com/api/v1/search?query=${query}`;
  }, [query]); // ✅ Callback deps are OK

  const fetchData = async url => {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    const url = getFetchUrl();
    fetchData(url);
  }, [getFetchUrl]); // ✅ Effect deps are OK

  return (
    <Layout location={location}>
      <SEO
        title="Проекты"
        keywords={[`личный блог`, `gatsby`, `albertmolodec`, `react`]}
      />
      <h1>Поиск по хакерньюс</h1>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          backgroundColor: 'white',
          border: '1px solid lightgrey',
          marginBottom: '20px',
        }}
      />
      {data && <h3>{data.nbHits} результатов</h3>}
      {data &&
        data.hits
          .filter(hit => hit.title)
          .map(item => (
            <Fragment key={item.created_at}>
              <h2 style={{ marginTop: '1.5em' }}>
                <a href={item.url}>{item.title}</a>
              </h2>
              {item.story_text && (
                <p
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.story_text}
                </p>
              )}
              <small style={{ display: 'block' }}>
                {new Date(item.created_at).toLocaleString()}
              </small>
            </Fragment>
          ))}
    </Layout>
  );
}

export default useEffectPage;
