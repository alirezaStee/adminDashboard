import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserDeropDown from "./UserDeropDown";
import Avatar from "./Avatar";

export default function Slider({ isSliderOpen, setIsSliderOpen }) {
  const [isUserDropDownMenuOpen, setIsUserDropDownMenuOpen] = useState(false);
  const userDropDownMenuRef = useRef();

  const handleClickOutside = (e) => {
    if (!userDropDownMenuRef.current.contains(e.target)) {
      setIsUserDropDownMenuOpen(false);
    }
  };
  useEffect(() => {
    if (isUserDropDownMenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
  }, [isUserDropDownMenuOpen]);
  return (
    <div
      className={
        "slider fixed left-0 top-0 z-[1035] h-screen w-[264px] -translate-x-full overflow-auto bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-700 open:translate-x-0 "
      }
      open={isSliderOpen}
    >
      <div className="">
        {/* icon */}
        <Link to="">
          <h3 className=" flex items-center ">
            <span className="mr-3 text-lg font-semibold">Admin Dashborad</span>{" "}
            <img
              src="/flavicon.png"
              alt=""
              width={"25px"}
              className="text-slate-800"
            />
          </h3>
        </Link>
        {/* user information */}
        <div className="my-8" data-te-dropdown-ref>
          <div href="#" className="flex ">
            <Avatar width={"35px"} height={"35px"} src={"/avatar.jpg"}></Avatar>
            <div className="ml-3">
              <h4
                className="relative flex cursor-pointer items-center capitalize"
                onClick={() => setIsUserDropDownMenuOpen(true)}
              >
                alireza.za{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </h4>
              <UserDeropDown
                isUserDropDownMenuOpen={isUserDropDownMenuOpen}
                userDropDownMenuRef={userDropDownMenuRef}
              ></UserDeropDown>
              <p className="text-sm font-light capitalize">front end</p>
            </div>
          </div>
        </div>
        {/* ul */}

        <ul>
          <li className="capitalize">
            <NavLink className="group flex h-full items-center py-2" to={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="feather feather-users align-middle transition duration-100 group-hover:text-[#518be1]"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              <span className="ml-2 transition duration-100 group-hover:text-[#518be1]">
                dashboard
              </span>
            </NavLink>
          </li>
          <li className="mb-1 text-sm capitalize text-gray-500">pages</li>

          <li className="capitalize">
            <NavLink
              className="group flex h-full items-center py-2"
              to={"users"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users align-middle transition duration-100 group-hover:text-[#518be1]"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="ml-2 transition duration-100 group-hover:text-[#518be1]">
                manage user
              </span>
            </NavLink>
          </li>
          <li className="capitalize">
            <NavLink
              className="group flex h-full items-center py-2"
              to={"calender"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="feather feather-users align-middle transition duration-100 group-hover:text-[#518be1]"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              <span className="ml-2 transition duration-100 group-hover:text-[#518be1]">
                calender
              </span>
            </NavLink>
          </li>
          <li className="mb-1 text-sm capitalize text-gray-500">charts</li>
          <li className="capitalize">
            <NavLink
              className="group flex h-full items-center py-2"
              to={"geography"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="feather feather-users align-middle transition duration-100 group-hover:text-[#518be1]"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
              </svg>
              <span className="ml-2 transition duration-100 group-hover:text-[#518be1]">
                geography chart
              </span>
            </NavLink>
          </li>
          <li className="capitalize">
            <NavLink
              className="group flex h-full items-center py-2"
              to={"LineChart"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="feather feather-users align-middle transition duration-100 group-hover:text-[#518be1]"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                />
              </svg>
              <span className="ml-2 transition duration-100 group-hover:text-[#518be1]">
                line chart
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
