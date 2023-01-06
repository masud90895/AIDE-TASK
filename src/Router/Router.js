import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element : <Main/>,
      errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    }
  ])

  export default router;