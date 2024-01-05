import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";

const Header = () => {
  const nav = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Destination", url: "/destination" },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Blog", url: "/blog" },
    { id: 5, name: "News", url: "/all-news" },
    { id: 6, name: "Contact", url: "/contact" },
    { id: 7, name: "Chat", url: "/chat" },
  ];

  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <header className=" mx-auto flex items-center justify-between fixed top-0 left-0 right-0  py-2 z-50 bg-white shadow-lg">
      {/* Logo */}
      <div className="pl-5 flex items-center gap-2">
        <img className="max-w-[150px] h-16" src="/intro-6.png" alt="" />
        <p className="text-3xl italic text-[#FF5522] font-bold">TOUR-UTOPIA</p>
      </div>

      {/* Navbar */}
      <ul
        className={`flex gap-5 ${
          open
            ? "flex-col absolute top-16 justify-center items-center gap-10 bg-black text-white w-full h-[calc(100vh-64px)]"
            : "hidden md:flex"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            onClick={handleLinkClick}
            className={`${
              pathname === item.url
                ? "text-[#FF5522] border-b-2 border-[#FF5522] font-semibold"
                : "font-semibold text-[#6C7171] hover:text-[#FF5522] transition-all"
            }`}
          >
            <li>{item.name}</li>
          </Link>
        ))}
        {user?.email ? (
          <div className="md:hidden">
            <ProfileDropDown />
          </div>
        ) : (
          <Link onClick={() => setOpen(!open)} to={"/login"}>
            <button className="md:hidden flex items-center justify-center gap-1 font-semibold text-[#6C7171]">
              <FaUser />
              Sign In
            </button>
          </Link>
        )}
      </ul>

      {/* Login - Register */}
      <div className="pr-5">
        {user?.email ? (
          <div className="hidden md:block">
            <ProfileDropDown />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="hidden md:flex items-center justify-center gap-1 font-semibold text-[#6C7171]">
              <FaUser />
              Sign In
            </button>
          </Link>
        )}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
