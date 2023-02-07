import React from "react";
import "./LineCards.css";

const LineCards = ({ to }) => {
  return (
    <div className="lineCards">
      {to}
      <div className="lineCard">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default LineCards;
