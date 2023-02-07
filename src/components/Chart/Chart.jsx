import React from "react";
import "./Chart.css";
import User from "./User";
import Company from "./Company";
import Interview from "./Interview";
import Reject from "./Reject";
import Accept from "./Accept";
import Call from "./Call";
import LineCards from "./LineCards/LineCards";

const Chart = () => {
  return (
    <div className="cards">
        <LineCards to={<User />}/>
        <LineCards to={<Company />}/>
        <LineCards to={<Call />}/>
        <LineCards to={<Interview />}/>
        <LineCards to={<Reject />}/>
        <LineCards to={<Accept />}/>
    </div>
  );
};

export default Chart;
