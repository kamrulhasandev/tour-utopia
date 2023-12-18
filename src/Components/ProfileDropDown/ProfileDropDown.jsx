import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUser,FaHeart,FaSignOutAlt,FaPoll, FaBookmark     } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkUserRole = async () => {
      // Fetch user role from the server
      const response = await fetch(
        `https://tour-utopia.vercel.app/checkUserRole/${user?.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch user role");
        return;
      }

      const data = await response.json();
      console.log(data.isAdmin);
      setIsAdmin(data.isAdmin);
    };

    checkUserRole();
  }, [user?.email]);

  return (
    <div className="   ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium text-[#FF5522]  ">
            <div><FaUser size={24}/></div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-3 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {isAdmin ? (
              <div className="px-1 py-1">
                <Menu.Item>
                {({ active }) => (
                  <Link to={'/dashboard'}>
                  <button
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaPoll/>
                    Dashboard
                  </button>
                  </Link>
                )}
              </Menu.Item>
                
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logOut}
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaSignOutAlt/>
                    Sign Out
                  </button>
                )}
              </Menu.Item>
                </div>
              ) : (
                <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to={'/myBooked'}>
                  <button
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaBookmark/>
                    My Booking
                  </button>
                  </Link>
                )}
              </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <Link to={'/saved'}>
                  <button
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaHeart className=" text-red-500"/>
                    Saved
                  </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logOut}
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    <FaSignOutAlt/>
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
              )
            }
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
