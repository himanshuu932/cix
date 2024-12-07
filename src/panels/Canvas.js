import React, { useState, useEffect } from 'react';
import './styles/Canvas.css'; // Assuming CSS is in this file

const Canvas = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level (100%)
  const [zoomPercentage, setZoomPercentage] = useState(100); // Zoom percentage (100%)

  useEffect(() => {
    // Prevent zooming with the scroll wheel or touch gestures
    const preventZoom = (e) => {
      if (e.ctrlKey || (e.touches && e.touches.length > 1)) {
        e.preventDefault(); // Prevent pinch-to-zoom or Ctrl+mouse-wheel zoom
      }
    };

    // Add event listeners to prevent zooming on the entire page
    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  // Zoom in function
  const zoomIn = () => {
    if (zoomLevel < 2) { // Limiting zoom in to 200%
      const newZoomLevel = zoomLevel + 0.1;
      setZoomLevel(newZoomLevel);
      setZoomPercentage(Math.round(newZoomLevel * 100)); // Update the zoom percentage
    }
  };

  // Zoom out function
  const zoomOut = () => {
    if (zoomLevel > 0.5) { // Limiting zoom out to 50%
      const newZoomLevel = zoomLevel - 0.1;
      setZoomLevel(newZoomLevel);
      setZoomPercentage(Math.round(newZoomLevel * 100)); // Update the zoom percentage
    }
  };

  return (
    <div className="canvasContainer">
      <div className="canvasArea" style={{ 
        transform: `scale(${zoomLevel})`, 
        transformOrigin: 'top left',
        marginLeft: `calc(15% + 10px)`  // Adjust for left pane width and margin
      }}>
        <div className="canvasContent">
          Main Content Area (Resizable and Scrollable)
          {/* Content inside the canvas */}
        </div>
      </div>

      <div className="zoomBar">
        <button onClick={zoomOut} className="zoomButton">-</button>
        <span className="zoomPercentage">{zoomPercentage}%</span>
        <button onClick={zoomIn} className="zoomButton">+</button>
      </div>
    </div>
  );
};

export default Canvas;
