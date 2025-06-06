import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ myPostJobsPromise }) => {
  const data = use(myPostJobsPromise);
  return (
    <div>
      <h2>{data.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Company Name</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Count</th>

                <th>Application</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {data.map((list, i) => (
                <tr key={list._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>{list.company}</td>
                  <td>{list.title}</td>
                  <td>{list.applicationDeadline}</td>
                  <td>{list.count}</td>

                  <td>
                    <Link to={`/applications/${list._id}`}>
                      View Application
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostedJobList;
