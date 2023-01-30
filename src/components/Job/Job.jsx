import React from "react";
import "./Job.css";
import Jobs from "../../dummy";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Job = () => {
  return (
    <>
      {Jobs.map((job) => (
        <div class="job" key={job.id}>
          <h2 class="job_title">{job.job_title}</h2>
          <h3 class="job__expression">{job.job_expresion}</h3>
          <div class="job__status">
            <div class="job__status_location js">
              <h4>{job.job_location}</h4>
            </div>
            <div class="job__status_job-type js">
              <h4>{job.job_type}</h4>
            </div>
          </div>

          <h3 class="apply">
            Apply
            {/* <v-icon name="bi-arrow-up-right-circle-fill" class="arrow" /> */}
            <div className="arrow">
            <BsArrowUpRightCircleFill />
            </div>
          </h3>
        </div>
      ))}
      {/* <div class="job">
        <h2 class="job_title">Frontend Engineer</h2>
        <h3 class="job__expression">We're looking for a senior frontend engineer.</h3>

        <div class="job__status">
            <div class="job__status_location js">
                <h4>100% Remote</h4>
            </div>
            <div class="job__status_job-type js">
                <h4>Full-time</h4>
            </div>
        </div>

        <h3 class="apply">
            Apply
            <v-icon name="bi-arrow-up-right-circle-fill" class="arrow" />
        </h3>
    </div> */}
    </>
  );
};

export default Job;
