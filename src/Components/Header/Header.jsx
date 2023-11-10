import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const nav = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Destination", url: "/destination" },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };
  const { pathname } = useLocation();

  

  return (
    <header className=" mx-auto flex items-center justify-between fixed top-0 left-0 right-0  py-2 z-10 bg-white">
      {/* Logo */}
      <div className="pl-5">
        <img className="max-w-[150px]" src="/logo.png" alt="" />
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
        <Link onClick={() => setOpen(!open)} to={"/login"}>
          <button className="md:hidden flex items-center justify-center gap-1 font-semibold text-[#6C7171]">
            <FaUser />
            Login/Signup
          </button>
        </Link>
      </ul>

      {/* Login - Register */}
      <div className="pr-5">
        <Link onClick={() => setOpen(!open)} to={"/login"}>
          <button className="hidden md:flex items-center justify-center gap-1 font-semibold text-[#6C7171]">
            <FaUser />
            Login/Signup
          </button>
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
