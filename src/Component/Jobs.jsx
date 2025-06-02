import React, { use } from "react";
import Job from "./job";
import { div } from "motion/react-client";

const Jobs = ({ jobs }) => {
  const jobData = use(jobs);
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Recent Posted Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {jobData.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
