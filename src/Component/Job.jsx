import React from "react";
import { Link } from "react-router";

const Job = ({ job }) => {
  const {
    _id,
    title,
    description,
    company,
    company_logo,
    location,
    requirements,
  } = job;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm p-5 space-y-3 h-[400px]">
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
          <div className="card-actions">
            {requirements.map((requirement, i) => (
              <div
                key={i}
                className="badge badge-outline border rounded-sm p-1">
                {requirement}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`}>
              <button className="btn bg-green-900 text-white hover:bg-black">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
