import React, { useState } from 'react';
import Layout from '~src/layouts/Layout';
import SEO from '~src/components/SEO';
import FullscreenGallery from '~src/ui/FullscreenGallery';

function GalleryPage({ location }) {
  const [fullscreenEnabled, setFullscreen] = useState(false);

  return (
    <Layout location={location}>
      <SEO title="Галерея" />
      <h1>Галерея</h1>

      <button type="button" onClick={() => setFullscreen(true)}>
        Включить полноэкранный режим
      </button>
      {fullscreenEnabled && (
        <FullscreenGallery disableFullscreen={() => setFullscreen(false)} />
      )}
    </Layout>
  );
}

export default GalleryPage;
