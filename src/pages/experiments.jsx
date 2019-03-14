import React, { Fragment, useState, useEffect, useCallback } from 'react';

function Experiments() {
  const [query, setQuery] = useState('react');
  const [data, setData] = useState();

  // ✅ Preserves identity until query changes
  const getFetchUrl = useCallback(() => {
    return 'https://hn.algolia.com/api/v1/search?query=' + query;
  }, [query]); // ✅ Callback deps are OK

  const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    const url = getFetchUrl();
    fetchData(url);
  }, [getFetchUrl]); // ✅ Effect deps are OK

  return (
    <div>
      <h1>Поиск по хакерньюс</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {data && <h3>{data.nbHits} результатов</h3>}
      {data &&
        data.hits.map(item => (
          <Fragment key={item.created_at}>
            <p>
              <a style={{ paddingTop: '10px' }} href={item.url}>
                {item.title}
              </a>
              <small style={{ display: 'block' }}>{new Date(item.created_at).toLocaleString()}</small>
            </p>
          </Fragment>
        ))}
    </div>
  );
}

export default Experiments;
