import React from "react";
import LeftPane from "./panels/LeftPane";
import RightPane from "./panels/RightPane";
import Canvas from "./panels/Canvas"; // Import the Canvas component
import "./App.css";

const App = () => {
  return (
    <div className="mainContainer">
      <LeftPane />
      <Canvas /> {/* Use the Canvas component here */}
      <RightPane />
    </div>
  );
};

export default App;
