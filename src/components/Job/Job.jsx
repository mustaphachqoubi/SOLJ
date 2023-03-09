import React, {useEffect} from "react";
import "./Job.css";
import Jobs from "../../dummy";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Job = ({seIsWantToRegestert}) => {
  useEffect(() => {
    seIsWantToRegestert(false)
  }, [])
  return (
    <>
      {Jobs.map((job) => (
        <div className="job" key={job.id}>
          <h2 className="job_title">{job.job_title}</h2>
          <h3 className="job__expression">{job.job_expresion}</h3>
          <div className="job__status">
            <div className="job__status_location js">
              <h4>{job.job_location}</h4>
            </div>
            <div className="job__status_job-type js">
              <h4>{job.job_type}</h4>
            </div>
          </div>

          <h3 className="apply">
            Apply
            <div className="arrow">
            <BsArrowUpRightCircleFill />
            </div>
          </h3>
        </div>
      ))}
    </>
  );
};

export default Job;
