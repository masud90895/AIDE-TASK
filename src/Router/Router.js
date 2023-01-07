import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AdminPanel/AddProduct";
import AddUser from "../Components/AdminPanel/AddUser";
import AllUser from "../Components/AdminPanel/AllUser";
import EditUser from "../Components/AdminPanel/EditUser";
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
    errorElement: <ErrorPage/>,
    children : [
      {
        path : "/admin",
        element : <AllUser/>
      },
      {
        path : "add-user",
        element : <AddUser />,
      },
      {
        path : "add-product",
        element : <AddProduct />,
      },
      {
        path : "edit/:id",
        loader : ({params})=> fetch(`http://localhost:5000/edit/${params.id}`),
        element : <EditUser/>
      }
    ]
  }
]);

export default router;
