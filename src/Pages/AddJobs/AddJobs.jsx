import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const AddJobs = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { min, max, currency, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    //Salary range setting
    restFormData.salaryRange = { min, max, currency };

    //requirements settings
    restFormData.requirements = restFormData.requirements
      .split(",")
      .map((require) => require.trim());

    //responsibilities settings

    restFormData.responsibilities = restFormData.responsibilities
      .split(",")
      .map((responsible) => responsible.trim());

    // Status
    restFormData.status = "active";

    axios
      .post("http://localhost:3000/jobs", restFormData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Job has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));

    console.log(restFormData);
  };
  return (
    <div>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-5xl mx-auto  border p-4 grid grid-cols-1 md:grid-cols-3">
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Title"
              name="title"
            />
          </div>

          <div>
            <label className="label">Location</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Location"
              name="location"
            />
          </div>
          <div>
            <label className="label">Job Type</label>
            <div className="filter">
              <input className="btn btn-square" type="reset" value="Hybrid" />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
              />
              <input
                value="Remote"
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
              />
              <input
                value="In House"
                className="btn"
                type="radio"
                name="jobType"
                aria-label="In House"
              />
            </div>
          </div>
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Category"
              name="category"
            />
          </div>
          <div>
            <label className="label">Application Deadline</label>
            <input
              type="date"
              className="input w-full border"
              placeholder="Application Deadline"
              name="applicationDeadline"
            />
          </div>
          <div>
            <label className="label">Salary Range</label>
            <div className="flex gap-3">
              <input
                type="text"
                className="input w-full border"
                placeholder="min"
                name="min"
              />
              <input
                type="text"
                className="input w-full border"
                placeholder="max"
                name="max"
              />

              <input
                type="text"
                className="input w-full border"
                placeholder="currency"
                name="currency"
              />
            </div>
          </div>

          <div className="col-span-3">
            <label className="label">Description</label>
            <textarea
              className="w-full border"
              rows={5}
              name="description"
              placeholder="description"
              id=""></textarea>
          </div>
          <div>
            <label className="label">Company</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="company"
              name="company"
            />
          </div>
          <div>
            <label className="label">Hr Name</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Hr Name"
              name="hr_name"
            />
          </div>
          <div>
            <label className="label">Hr Email</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Hr Email"
              name="hr_email"
              defaultValue={user?.email}
              readOnly
            />
          </div>

          <div className="col-span-3">
            <label className="label">Requirements</label>
            <textarea
              className="w-full border"
              rows={5}
              name="requirements"
              placeholder="use comma (,) to separate"
              id=""></textarea>
          </div>
          <div className="col-span-3">
            <label className="label">Responsibilities</label>
            <textarea
              className="w-full border"
              rows={5}
              name="responsibilities"
              placeholder="use comma (,) to separate"
              id=""></textarea>
          </div>
          <div className="col-span-3">
            <label className="label">Company logo</label>
            <input
              type="text"
              className="input w-full border"
              placeholder="Company logo"
              name="company_logo"
            />
          </div>

          <div className="col-span-3">
            <button className="btn w-full" type="submit">
              Publish Job
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
