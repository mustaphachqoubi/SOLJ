import React, {useState} from "react";
import "./Card.css";

const Card = ({
  classname,
  text,
  type,
  applying_site,
  isCalledORmessaged,
  didIGotTheInterview,
  acceptOrReject,
  applyingTimes,
  rejectingTimes,
  acceptingTimes,
  interviews,
}) => {
  const [isToolTipOpen, setIsToolTipOpen] = useState(false)
  return (
    <div className="card_tooltip_container">
      <div className={classname} onMouseOver={() => setIsToolTipOpen(true)} onMouseOut={() => setIsToolTipOpen(false)}>{text}</div>
      <div className="tooltip" style={isToolTipOpen === false ? {display: 'none'} : {display:'flex'}}>
        {type === "company" ? (
          <div>
            <h3 className="title">company name: {text}</h3>
            <h3 className="title">applying site: {applying_site}</h3>
            <h3 className="title">call / message: {isCalledORmessaged}</h3>
            <h3 className="title">interview: {didIGotTheInterview}</h3>
            <h3 className="title">accept / reject: {acceptOrReject}</h3>
          </div>
        ) : type === "call" ? (
          <div>
            <h3 className="title">google</h3>
            <h3 className="title">facebook</h3>
          </div>
        ) : type === "interview" ? (
          <div>
            <h3 className="title">google</h3>
            <h3 className="title">facebook</h3>
          </div>
        ) : type === "accept" ? (
          <div>
            <h3 className="title">google</h3>
          </div>
        ) : type === "reject" ? (
          <div>
            <h3 className="title">facebook</h3>
          </div>
        ) : (
          <div>
            <h3 className="title">user name: {text}</h3>
            <h3 className="title">applying times: {applyingTimes}</h3>
            <h3 className="title">interviews: {interviews}</h3>
            <h3 className="title">rejecting times: {rejectingTimes}</h3>
            <h3 className="title">accepting times: {acceptingTimes}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
