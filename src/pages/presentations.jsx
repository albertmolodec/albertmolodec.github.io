import React, { useState, useEffect } from 'react';

function Presentations() {
  const [count, setCount] = useState(0);
  const [banana, setBanana] = useState({
    width: 20,
    height: 60,
  });

  const fetchData = async () => {
    const data = await (await fetch(
      'https://jsonplaceholder.typicode.com/posts/1/comments',
    )).json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

  const incrementBananaHeight = () => {
    setBanana({
      ...banana,
      height: banana.height + 1,
    });

    return () => console.log('cleaned');
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <p>
        Size of banana: {banana.width} x {banana.height}
      </p>
      <button type="button" onClick={incrementBananaHeight}>
        Increment banana height
      </button>
    </div>
  );
}

export default Presentations;
