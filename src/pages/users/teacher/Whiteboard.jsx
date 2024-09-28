import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Add this at the top of your file
if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: 'development' } };
}

const Excalidraw = lazy(() =>
  import('@excalidraw/excalidraw')
    .then((module) => ({
      default: module.Excalidraw,
    }))
    .catch((error) => {
      console.error('Error loading Excalidraw:', error);
      return { default: () => <div>Error loading Excalidraw</div> };
    })
);

const Whiteboard = () => {
  console.log('Whiteboard component rendering');
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [error, setError] = useState(null);
  const { uniqueId } = useParams();
  const navigate = useNavigate();

  const onExcalidrawAPIMount = useCallback((api) => {
    setExcalidrawAPI(api);
  }, []);

  const SaveButton = () => {
    const saveAsSVG = async () => {
      if (!excalidrawAPI) {
        console.error('Excalidraw API is undefined');
        alert('Failed to access the drawing');
        return;
      }

      const title = prompt('Enter a title for your SVG:', 'My Drawing');
      if (!title) return;

      const { exportToSvg } = await import('@excalidraw/excalidraw');
      const svg = await exportToSvg({
        elements: excalidrawAPI.getSceneElements(),
        appState: excalidrawAPI.getAppState(),
        files: excalidrawAPI.getFiles(),
      });

      const svgBlob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });

      const formData = new FormData();
      formData.append('image', svgBlob, `${title}.svg`);
      formData.append('title', title);

      console.log('Sending SVG save request...');
    };

    return (
      <button
        onClick={saveAsSVG}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000, // This ensures the button is on top
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
        }}
      >
        Save as SVG
      </button>
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Suspense fallback={<div>Loading Excalidraw...</div>}>
        <Excalidraw
          excalidrawAPI={onExcalidrawAPIMount}
          initialData={{
            elements: [],
            appState: { viewBackgroundColor: '#ffffff' },
          }}
        />
      </Suspense>
      <SaveButton />
    </div>
  );
};

export default Whiteboard;
