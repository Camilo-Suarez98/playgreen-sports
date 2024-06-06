import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import Intro from "../pages/Intro/Intro";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Intro />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  },
]);

export default router;