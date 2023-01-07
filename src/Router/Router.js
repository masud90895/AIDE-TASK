import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import AdminLayout from "./AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path : "/admin",
    element : <AdminLayout/>,
    errorElement: <ErrorPage/>
  }
]);

export default router;
