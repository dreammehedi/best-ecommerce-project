import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/about_us/AboutUs";
import Error from "../pages/error/Error";
import FaqPage from "../pages/faq/FaqPage";
import Register from "../pages/register/Register";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";

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
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
    ],
  },
]);

export default router;
