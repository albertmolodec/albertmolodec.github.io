/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
      <button type="button" onClick={disableFullscreen} style={{ color: 'white' }}>
        Выйти из полноэкранного режима
      </button>
    </Lightbox>
  );
}

FullscreenGallery.propTypes = {
  mediaItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']),
      date: PropTypes.string,
      src: PropTypes.string.isRequired,
      filename: PropTypes.string,
    }),
  ),
  dateRequired: PropTypes.bool,
};

FullscreenGallery.defaultProps = {};

export default FullscreenGallery;
