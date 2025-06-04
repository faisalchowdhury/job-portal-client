export const myPostJobsPromise = (email) => {
  return fetch(`http://localhost:3000/jobs/applications?email=${email}`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());
};
