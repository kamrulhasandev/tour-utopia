import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import SignUp from "../Pages/SIgnUP/SignUp";
import SignIn from "../Pages/SIgnIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <App/>
        },
        {
            path: '/sign-up',
            element: <SignUp/>
        },
        {
            path: '/login',
            element: <SignIn/>
        },
    ]
  },
]);

export default router;
