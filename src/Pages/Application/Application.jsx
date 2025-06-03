import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const Application = () => {
  const jobId = useParams();
  const data = useLoaderData();

  const handleStatusChange = (e, applicationId) => {
    console.log(e.target.value, applicationId);

    axios
      .patch(`http://localhost:3000/applications/${applicationId}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3 className="text-3xl">Job Id : {jobId.jobId}</h3>

      <h5 className="text-xl">Total Application : {data.length}</h5>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((application, i) => (
              <tr key={application._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status || ""}
                    className="select">
                    <option value={""} disabled={true}>
                      Update Status
                    </option>
                    <option value={"Pending"}>Pending</option>
                    <option value={"Interview"}>Interview</option>
                    <option value={"Hired"}>Hired</option>
                    <option value={"Rejected"}>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Application;
