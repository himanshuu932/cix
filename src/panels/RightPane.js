import React, { useState } from "react";
import "./styles/RightPane.css";

const RightPane = () => {
  // State for managing collapsed sections
  const [collapsedSections, setCollapsedSections] = useState({
    codeEditor: false,
    properties: false,
  });

  // Toggle collapse for sections
  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="rightPane">
 

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
        {!collapsedSections.codeEditor && (
          <div className="tile">Tile 1 Content</div>
        )}
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
        {!collapsedSections.properties && (
          <div className="tile">Tile 2 Content</div>
        )}
      </div>
    </div>
  );
};

export default RightPane;
