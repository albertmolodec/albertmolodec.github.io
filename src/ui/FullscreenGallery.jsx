import React, { useEffect } from 'react';
import useGalleryControl from '~src/hooks/useGalleryControl';
import Lightbox from '~src/layouts/Lightbox';

function FullscreenGallery({ mediaItems, initialActive, disableFullscreen }) {
  const { active, setActive, toPrev, toNext } = useGalleryControl(
    mediaItems,
    initialActive,
  );

  const handleKeyPress = e => {
    switch (e.keyCode) {
      case 37:
        return toPrev();
      case 39:
        return toNext();
      case 27:
        return disableFullscreen();
      default:
        return true;
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => window.removeEventListener('keyup', handleKeyPress);
  });

  return (
    <Lightbox>
      <button
        type="button"
        onClick={disableFullscreen}
        style={{ color: 'white' }}
      >
        Выйти из полноэкранного режима
      </button>
    </Lightbox>
  );
}

export default FullscreenGallery;
