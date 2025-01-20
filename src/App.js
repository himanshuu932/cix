import React, { useState, useEffect } from "react";
import LeftPane from "./panels/LeftPane";
import RightPane from "./panels/RightPane";
import Canvas from "./panels/Canvas";
import "./App.css";
// change by himanbshu
//change by utkarsh
// agiadhi fvhvf
const App = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Manage zoom level at the parent level

  // Prevent zooming on the entire page
  useEffect(() => {
    const preventZoom = (e) => {
      // Prevent pinch zoom or mouse-wheel zoom
      if (e.touches && e.touches.length > 1 || e.ctrlKey || e.deltaY) {
      //  e.preventDefault();
      }
    };

    // Allow vertical and horizontal scrolling, but prevent zoom actions
    document.addEventListener('wheel', preventZoom, { passive: false }); // Prevent mouse wheel zoom
    document.addEventListener('touchmove', preventZoom, { passive: false }); // Prevent pinch zoom

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <div className="mainContainer">
      <LeftPane />
      <Canvas zoomLevel={zoomLevel} setZoomLevel={setZoomLevel}/>
      <RightPane zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
          </div>
  );

};

export default App;
