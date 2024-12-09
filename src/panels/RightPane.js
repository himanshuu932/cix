import React, { useState } from "react";
import "./styles/RightPane.css";

const RightPane = ({ zoomLevel, setZoomLevel }) => {
  const [collapsedSections, setCollapsedSections] = useState({
    codeEditor: false,
    properties: false,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const zoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.1);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="rightPane">
      {/* ZoomBar Section */}
      <div className="zoomBar">
        <button onClick={zoomOut} className="zoomButton">-</button>
        <span className="zoomPercentage">{Math.round(zoomLevel * 100)}%</span>
        <button onClick={zoomIn} className="zoomButton">+</button>
        <button onClick={resetZoom} className="resetButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg></button>
      </div>

      {/* Section 1: Code Editor */}
      <div className="section">
        <div className="sectionHeader">
          <span>Code Editor</span>
          <button
            className="button"
            onClick={() => toggleSection("codeEditor")}
          >
            {collapsedSections.codeEditor ? "+" : "-"}
          </button>
        </div>
        {!collapsedSections.codeEditor && <div className="tile">Tile 1 Content</div>}
      </div>

      {/* Section 2: Properties */}
      <div className="section">
        <div className="sectionHeader">
          <span>Properties</span>
          <button
            className="button"
            onClick={() => toggleSection("properties")}
          >
            {collapsedSections.properties ? "+" : "-"}
          </button>
        </div>
        {!collapsedSections.properties && <div className="tile">Tile 2 Content</div>}
      </div>
    </div>
  );
};

export default RightPane;
