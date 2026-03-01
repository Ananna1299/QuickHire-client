import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FindJobs from "../Pages/Home/FindJobs/FindJobs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoutes";
import AddJobs from "../Pages/AddJobs/AddJobs";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
        path:"find-jobs",
        element:<FindJobs></FindJobs>
      },
      {
         path:"add-jobs",
        element:<PrivateRoute>
          <AddJobs></AddJobs>
        </PrivateRoute>
      }
       
      

    ]
  },

  {
    path:"/",
    element:<AuthLayout></AuthLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  }
]);