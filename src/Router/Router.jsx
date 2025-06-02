import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Job from "../Component/job";
import JobDetails from "../Pages/JobDetails/Jobdetails";

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
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
