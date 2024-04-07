import React, { useState } from "react";
import logo from "../assets/logo/Web_Photo_Editor.jpg";
import { navItems } from "../Constants";
import { Menu, X } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav
      className="sticky top-0 z-50 py-3  border-b
   border-neutral-700/80 "
   style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-50 mr-2" src={logo} alt="logo" />
            {/* <span className="text-xl tracking-tight"> Thunder</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <a href="#" className="py-2 px-3 border rounded-md ">
              {" "}
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              {" "}
              Register Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex:col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-white">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounder-md">
                Sign in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                {" "}
                Register Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
