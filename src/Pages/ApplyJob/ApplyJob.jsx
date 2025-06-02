import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const ApplyJob = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;

    console.log(linkedin, github, portfolio);

    const application = {
      jobId: id,
      applicant: user.email,
      linkedin,
      github,
      portfolio,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleApplyJob}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-4 my-10">
        <h2 className="text-lg ">
          Applying for{" "}
          <Link className="text-green-700" to={`/jobs/${id}`}>
            This Job
          </Link>
        </h2>
        <label className="label">Linkedin Profile Link</label>
        <input
          type="url"
          className="input border w-full"
          placeholder="Linkedin Profile Link"
          name="linkedin"
        />

        <label className="label">Github Link</label>
        <input
          type="url"
          className="input border w-full"
          placeholder="Github link"
          name="github"
        />

        <label className="label">Portfolio Link</label>
        <input
          type="text"
          className="input border w-full"
          placeholder="Portfolio Link"
          name="portfolio"
        />

        <input type="submit" className="btn w-full" value={"Submit"} />
      </form>
    </div>
  );
};

export default ApplyJob;
