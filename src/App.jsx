import { useState, useEffect } from "react";
import "./view.css";
import instructionIcon from "./assets/info.png";

function App() {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">ONE SHOT MEMORY GAME</div>
          <div className="instructions">
            Get points by clicking on an image but don't click on any more than
            once!
            <img
              src={instructionIcon}
              alt="Instructions icon"
              className="instructionIcon"
            />
          </div>
        </div>
        <div className="right">
          <div className="scores">Scores 0</div>
          <div className="bestscores">Best Score 0</div>
        </div>
      </div>
      <div className="main">{image && <img src={image} />}</div>
      <div className="main">{image && <img src={image} />}</div>
      <div className="main">{image && <img src={image} />}</div>
      <div className="main">{image && <img src={image} />}</div>
    </>
  );
}

export default App;
