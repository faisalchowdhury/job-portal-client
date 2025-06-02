import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    company_logo,
    location,
    company,
    title,
    requirements,
    description,
    salaryRange,
    responsibilities,
  } = useLoaderData();

  return (
    <div>
      <div className="card bg-base-100  shadow-sm p-5 space-y-3 my-10">
        <div className="flex gap-5">
          <figure>
            <img className="w-[50px]" src={company_logo} alt="Shoes" />
          </figure>

          <div>
            <h2 className="text-2xl">{company}</h2>
            <p>{location}</p>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-xl">
            Salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <div>
            <h3 className="text-lg font-medium">Responsibilities</h3>
            <ol>
              {responsibilities.map((duty, i) => (
                <li key={i}>
                  {i + 1} . {duty}
                </li>
              ))}
            </ol>
          </div>
          <div className="card-actions">
            {requirements.map((requirement, i) => (
              <div
                key={i}
                className="badge badge-outline border rounded-sm p-1">
                {requirement}
              </div>
            ))}
          </div>
          <div className="">
            <Link to={`/jobs/`}>
              <button className="btn btn-xl w-full bg-green-900 text-white hover:bg-black">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
