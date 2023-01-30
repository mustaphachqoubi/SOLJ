import React from "react";
import "./MotivationalSection.css";
import {AiFillPlayCircle} from 'react-icons/ai'

const MotivationalSection = () => {
  return (
    <div className="Msection">
      <div className="motivational">
        <div className="motivational_sentence">
          <h1>Let's get started on something great</h1>
        </div>
        <div className="motivational_description">
          <p>Join and make your life easier with <strong>SOLJ</strong>.</p>
        </div>
      </div>
      <div className="Msection_btns">
        <div className="watch_demo btn">
            <AiFillPlayCircle />
            Watch demo
            </div>
        <div className="get_started btn">Get started</div>
      </div>
    </div>
  );
};

export default MotivationalSection;
