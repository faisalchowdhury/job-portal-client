import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Job from "../Component/job";
import JobDetails from "../Pages/JobDetails/Jobdetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJobs from "../Pages/AddJobs/AddJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "apply-job/:id",
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "my-application",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "add-jobs",
        Component: AddJobs,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
