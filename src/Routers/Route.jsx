import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import SignUp from "../Pages/SIgnUP/SignUp";
import SignIn from "../Pages/SIgnIn/SignIn";
import Destination from "../Pages/Destination/Destination";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
