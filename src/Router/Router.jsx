import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    },
    {
        path : '*',
        Component : NotFound
    }
]) 