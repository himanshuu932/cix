import React, { useState, useEffect } from 'react';
import './styles/Canvas.css'; // Assuming CSS is in this file

const Canvas = ({zoomLevel,setZoomLevel}) => {
// Default zoom level (100%)
  const [zoomPercentage, setZoomPercentage] = useState(100); // Zoom percentage (100%)

  useEffect(() => {
    // Prevent zooming on the whole page
    const preventZoom = (e) => {
      if (e.touches && e.touches.length > 1 || e.ctrlKey) {
        e.preventDefault(); // Prevent pinch-to-zoom or Ctrl+mouse-wheel zoom
      }
    };

    // Add global event listeners to prevent zooming on the page
    document.body.style.overflow = 'hidden'; // Disable scrolling to prevent zooming outside Canvas

    //document.addEventListener('wheel', preventZoom, { passive: false }); // Prevent mouse wheel zoom
    document.addEventListener('touchmove', preventZoom, { passive: false }); // Prevent pinch zoom

    const canvasElement = document.querySelector('.canvasArea');
    if (canvasElement) {
      const handleZoom = (e) => {
        e.preventDefault(); // Prevent the default scroll behavior

        setZoomLevel((prevZoom) => {
          const newZoomLevel =
            e.deltaY < 0 ? Math.min(prevZoom + 0.1, 2) : Math.max(prevZoom - 0.1, 0.5);
          console.log("Zoom Level:", newZoomLevel); // Debug log to check the zoom level
          setZoomPercentage(Math.round(newZoomLevel * 100));
          return newZoomLevel;
        });
      };

      canvasElement.addEventListener('wheel', handleZoom, { passive: false });

      // Cleanup event listeners on component unmount
      return () => {
        document.removeEventListener('touchmove', preventZoom);
        canvasElement.removeEventListener('wheel', handleZoom);
      };
    }
  }, []);

  // Zoom in function
  const zoomIn = () => {
    if (zoomLevel < 2) {
      const newZoomLevel = zoomLevel + 0.1;
      setZoomLevel(newZoomLevel);
      setZoomPercentage(Math.round(newZoomLevel * 100));
      console.log("Zoom In:", newZoomLevel); // Debug log for zoom in
    }
  };

  // Zoom out function
  const zoomOut = () => {
    if (zoomLevel > 0.5) {
      const newZoomLevel = zoomLevel - 0.1;
      setZoomLevel(newZoomLevel);
      setZoomPercentage(Math.round(newZoomLevel * 100));
      console.log("Zoom Out:", newZoomLevel); // Debug log for zoom out
    }
  };

  return (
    <div className="canvasContainer">
      <div
        className="canvasArea"
        style={{
          transform: `scale(${zoomLevel})`, // Apply scaling
          transformOrigin: 'top left', // Keep zooming around the top-left corner
          marginLeft: `calc(15% + 10px)`, // Adjust for left pane width and margin
        }}
      >
        <div className="canvasContent">
          Main Content Area (Resizable and Scrollable)
        </div>
      </div>

     
    </div>
  );
};

export default Canvas;
