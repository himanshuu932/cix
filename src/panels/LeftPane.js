import React, { useState } from "react";
import "./styles/LeftPane.css";

const LeftPane = () => {
  // State for managing collapsed sections (excluding Section 1)
  const [collapsedSections, setCollapsedSections] = useState({
    section2: false,
    section3: false,
  });

  // State for managing "Filename" content
  const [filenameContent, setFilenameContent] = useState("Filename");
  const [isEditing, setIsEditing] = useState(false);

  // Toggle collapse for sections (excluding Section 1)
  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Handle editing of the Filename
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (e) => {
    setFilenameContent(e.target.value);
    setIsEditing(false);
  };

  return (
    <div className="leftPane">
      <h1>CIX</h1>
      {/* Section 1 */}
      <div className="section">
        <div className="sectionHeader">
          {isEditing ? (
            <input
              className="editInput"
              type="text"
              defaultValue={filenameContent}
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <span onDoubleClick={handleDoubleClick}>{filenameContent}</span>
          )}
        </div>
      
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="sectionHeader">
          <span>Toolbar</span>
          <button className="button" onClick={() => toggleSection("section2")}>
            {collapsedSections.section2 ? "+" : "-"}
          </button>
        </div>
        {!collapsedSections.section2 && <div className="tile">Tile 2 Content</div>}
      </div>

      {/* Section 3 */}
      <div className="section">
        <div className="sectionHeader">
          <span>Layers</span>
          <button className="button" onClick={() => toggleSection("section3")}>
            {collapsedSections.section3 ? "+" : "-"}
          </button>
        </div>
        {!collapsedSections.section3 && <div className="tile">Ashutosh Verma and others</div>}
      </div>
    </div>
    //utkarsh is bhowsadiwala
  );
};

export default LeftPane;
