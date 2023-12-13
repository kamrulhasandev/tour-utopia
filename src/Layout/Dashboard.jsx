import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Toggle Bar */}
      <div className="bg-white p-4 sm:hidden">
        <button className="text-gray-600" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`bg-[#040F39] text-white w-64 py-8 px-4 fixed h-full transition-all ${
          isSidebarOpen ? "left-0" : "-left-64"
        }`}
      >
        {/* Sidebar content */}
        <ul className="flex flex-col">
          <h4 className="text-3xl font-bold text-center pb-5">Tour Utopia</h4>
          <Link className="hover:bg-[#7261E8] p-2 rounded-md" to={"/dashboard"}>
            <li className="flex items-center gap-1">Home</li>
          </Link>
          <Link
            className="hover:bg-[#7261E8] p-2 rounded-md"
            to={"/dashboard/users"}
          >
            <li className="flex items-center gap-1">Users</li>
          </Link>
          <Link
            className="hover:bg-[#7261E8] p-2 rounded-md"
            to={"/dashboard/packages"}
          >
            <li className="flex items-center gap-1">Packages</li>
          </Link>
          <Link
            className="hover:bg-[#7261E8] p-2 rounded-md"
            to={"/dashboard/news"}
          >
            <li className="flex items-center gap-1">News</li>
          </Link>
          <Link
            className="hover:bg-[#7261E8] p-2 rounded-md"
            to={"/dashboard/blogs"}
          >
            <li className="flex items-center gap-1">Blogs</li>
          </Link>
          <Link
            className="hover:bg-[#7261E8] p-2 rounded-md"
            to={"/dashboard/booked"}
          >
            <li className="flex items-center gap-1">Booked</li>
          </Link>
          <br />
          <Link className="hover:bg-[#7261E8] p-2 rounded-md" to={"/"}>
            <li className="flex items-center gap-1">Main Home</li>
          </Link>
          <li className="hover:bg-[#7261E8] p-2 rounded-md flex items-center gap-1">
            Logout
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
        className={`ml-0 sm:ml-64 p-4 transition-all ${
          isSidebarOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        <div className="bg-white py-3 rounded-md flex justify-end pe-5">
          <FaUser />
        </div>

        {/* Dashboard Content */}
        <Outlet className="bg-[#F7F7F7]" />
      </div>
    </div>
  );
};

export default Dashboard;
