import React, { use } from "react";

const Applications = ({ myApplicationPromise }) => {
  const data = use(myApplicationPromise);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Company</th>
              <th>Linkedin</th>
              <th>Portfolio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data.map((application, i) => (
              <tr key={application._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={application.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{application.company}</div>
                      <div className="text-sm opacity-50">
                        {application.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{application.linkedin}</td>
                <td>{application.portfolio}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
