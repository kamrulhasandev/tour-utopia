import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const ProfileDropDown = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="   ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium text-white  ">
            <img src="./avater.png" className="h-10 w-10" alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {() => (
                  <button className="flex items-center gap-2">
                    <img src="./avater.png" className="h-10 w-10" alt="" />
                    <div className="text-black flex flex-col items-start">
                      {user.displayName} <br />
                      <small>{user.email}</small>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logOut}
                    className={`${
                      active ? "bg-[#FF5522] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
