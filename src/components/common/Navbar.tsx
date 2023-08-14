"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigationLinks = [
    { name: "Home", href: "/" },

    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Fashnest.
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link href="/cart">
              <button
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium "
                // onClick={() => alert("Cart clicked")}
              >
                <div className="h-6 w-6 relative">
                  <ShoppingBagIcon className="h-full w-full" />
                  <span className="inline-flex justify-center items-center absolute rounded-[50%] -top-2 -right-4 h-5 w-5 bg-red-50 px-2 py-1 text-xs  text-red-700 ring-1 ring-inset ring-red-600/10">
                    3
                  </span>
                </div>
              </button>
            </Link>

            {/* Login/Logout Button */}
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <Link href="/auth/login">Login</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/cart">
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ">
              <div className="h-6 w-6 relative">
                <ShoppingBagIcon className="h-full w-full" />
                <span className="inline-flex justify-center items-center absolute rounded-[50%] -top-2 -right-4 h-5 w-5 bg-red-50 px-2 py-1 text-xs  text-red-700 ring-1 ring-inset ring-red-600/10">
                  3
                </span>
              </div>
            </button>
          </Link>

          {/* Login/Logout Button */}
          <button
            className="text-white hover:bg-gray-700 px-3 py-2  rounded-md text-base font-medium"
            onClick={() => alert("Login/Logout clicked")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
