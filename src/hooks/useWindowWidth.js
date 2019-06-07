import { useState, useEffect } from 'react';

/**
 * useWindowWidth
 *
 * Хук подписывается на ресайз окна браузера
 *
 * @return {number} Ширина окна
 */
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(null);

  function getWidthAndSave() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    getWidthAndSave();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getWidthAndSave);
    return () => {
      window.removeEventListener('resize', getWidthAndSave);
    };
  }, []);

  return windowWidth;
}
