import React from "react";
import "./Chart.css";
import User from "./User";
import Company from "./Company";
import Interview from "./Interview";
import Accept from "./Accept";
import Reject from "./Reject";
import Call from "./Call";
import LineCards from "./LineCards/LineCards";

const Chart = () => {
  return (
    <div className="cards">
      <div className="userCard c">
        <User text={'Mustapha'} type={'user'}/>
      </div>
      <div className="compaiesCards c">
        <Company text={'Google'} type={'company'} />
        <Company text={'Facebook'} type={'company'} />
        <Company text={'Amazon'} type={'company'} />
        <Company text={'Microsoft'} type={'company'} />
      </div>
      <div className="callCard c">
        <Call />
      </div>
      <div className="interviewCard c">
        <Interview />
      </div>
      <div className="rejectAcceptCard c">
        <Accept />
        <Reject />
      </div>
    </div>
  );
};

export default Chart;
