import { useState } from 'react';

const useGalleryControl = (mediaItems = [], initialActive = 0) => {
  const [active, setActive] = useState(initialActive);

  const toNext = () => {
    if (active !== mediaItems.length - 1) setActive(active + 1);
    else setActive(0);
  };
  
  const toPrev = () => {
    if (active !== 0) setActive(active - 1);
    else setActive(mediaItems.length - 1);
  };

  return {
    active,
    setActive,
    toPrev,
    toNext,
  };
};

export default useGalleryControl;
