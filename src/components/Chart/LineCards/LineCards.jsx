import React from "react";
import "./LineCards.css";

const LineCards = ({ to }) => {
  return (
    <div className="lineCards">
      <div className="lineCard">
      {to}
        <div className="line"></div>
      </div>
    </div>
  );
};

export default LineCards;
