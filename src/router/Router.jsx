import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import About from "../pages/about/About";
import FaqPage from "../pages/faq/FaqPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/faq",
        element:<FaqPage></FaqPage>,
      }
    ],
  },
]);

export default router;
