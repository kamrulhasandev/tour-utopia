import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import SignUp from "../Pages/SIgnUP/SignUp";
import SignIn from "../Pages/SIgnIn/SignIn";
import Destination from "../Pages/Destination/Destination";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SearchResult from "../Pages/SearchResult/SearchResult";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Dashboard from "../Layout/Dashboard";
import Users from "../Components/Dashboard/Users/Users";
import News from "../Components/Dashboard/News/News";
import Blogs from "../Components/Dashboard/Blogs/Blogs";
import Booked from "../Components/Dashboard/Booked/Booked";
import Packages from "../Components/Dashboard/Packages/Packages";
import DashboardHome from "../Components/Dashboard/dashboardHome/DashboardHome";
import Saved from "../Pages/Saved/Saved";
import MyBooked from "../Pages/myBooked/MyBooked";
import Blog from "../Pages/blog/Blog";
import AllNews from "../Pages/news/AllNews";
import BlogDetails from "../Pages/blogDetails/BlogDetails";
import NewsDetails from "../Pages/newsDetails/NewsDetails";
import AddPackage from "./../Components/Dashboard/Packages/addPackage/AddPackage";
import AddNews from "../Components/Dashboard/News/addNews/AddNews";
import AddBlogs from "../Components/Dashboard/Blogs/addBlogs/AddBlogs";
import EditPackage from "../Components/Dashboard/Packages/editPackage/EditPackage";
import EditNews from "../Components/Dashboard/News/editNews/EditNews";
import EditBlog from "../Components/Dashboard/Blogs/editBlog/editBlog";
import Success from "./../Pages/Payment/Success";
import Cancel from "./../Pages/Payment/Cancel";
import Chat from "../Pages/chat/Chat";

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
      {
        path: "/:id",
        element: <SearchResult />,
      },
      {
        path: "/package/:id",
        element: <PackageDetails />,
        // loader: ({ params }) => fetch(`/dummyBlogs.json"${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/all-news",
        element: <AllNews />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/myBooked",
        element: <MyBooked />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/chat",
        element: <Chat />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/packages",
        element: <Packages />,
      },
      {
        path: "/dashboard/packages/addPackage",
        element: <AddPackage />,
      },
      {
        path: "/dashboard/packages/edit/:packageId",
        element: <EditPackage />,
      },
      {
        path: "/dashboard/news",
        element: <News />,
      },
      {
        path: "/dashboard/news/addNews",
        element: <AddNews />,
      },
      {
        path: "/dashboard/news/edit/:newsId",
        element: <EditNews />,
      },
      {
        path: "/dashboard/blogs",
        element: <Blogs />,
      },
      {
        path: "/dashboard/blogs/addBlog",
        element: <AddBlogs />,
      },
      {
        path: "/dashboard/blogs/edit/:blogId",
        element: <EditBlog />,
      },
      {
        path: "/dashboard/booked",
        element: <Booked />,
      },
    ],
  },
]);

export default router;
