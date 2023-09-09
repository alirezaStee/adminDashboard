import React, { useEffect, useRef, useState } from "react";
import UserDeropDown from "./UserDeropDown";
import Avatar from "./Avatar";

export default function Navbar({ isSliderOpen, setIsSliderOpen }) {
  const [isUserDropDownMenuOpen, setIsUserDropDownMenuOpen] = useState(false);
  const userDropDownMenuRef = useRef();

  const handleClickOutside = (e) => {
    if (!userDropDownMenuRef.current.contains(e.target)) {
      setIsUserDropDownMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="bg-white shadow-[0_0_2rem_0_rgba(33,37,41,0.1)]">
      <div className=" mx-auto flex  items-center justify-between   p-4">
        {/* left side */}
        <div className="flex items-center">
          {/* menu button */}
          <button
            className=""
            onClick={() => {
              setIsSliderOpen((pre) => !pre);
            }}
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* form search */}
          <form className="ml-6 hidden items-center justify-between rounded-full bg-[#f3f6fa] px-4 py-2 sm:flex ">
            <input
              className="bg-inherit outline-none"
              type="text"
              placeholder="Search..."
            />
            <button className="ml-3 cursor-pointer">
              <svg
                className="h-4 w-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* rigth side */}
        <div className="relative flex items-center">
          {/* basket icon */}
          <a
            className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none   [&.active]:text-black/90 "
            href="#"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </a>
          {/* notife icon */}
          <a
            className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  [&.active]:text-black/90 "
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="absolute -mt-4 ml-2.5 rounded-full bg-blue-600 px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
              0
            </span>
          </a>
          {/* user icon */}
          <div className="relative" data-te-dropdown-ref>
            <a
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref={false}
              aria-expanded="false"
            >
              <Avatar
                src="/avatar.jpg"
                height={"25px"}
                width={"25px"}
                onClick={() => setIsUserDropDownMenuOpen(true)}
              ></Avatar>
            </a>
            <UserDeropDown
              isUserDropDownMenuOpen={isUserDropDownMenuOpen}
              userDropDownMenuRef={userDropDownMenuRef}
              float="right"
              className="right-0"
            ></UserDeropDown>
          </div>
        </div>
      </div>
    </nav>
  );
}
