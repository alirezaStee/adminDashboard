import React from "react";
import { memo } from "react";

const UserDeropDown = memo(
  ({ isUserDropDownMenuOpen, userDropDownMenuRef, float }) => {
    const floatVariants = {
      left: "left-0",
      right: "right-0",
    };
    return (
      <ul
        className={`absolute  z-[1000]  m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg open:block ${floatVariants[float]}`}
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
        open={isUserDropDownMenuOpen}
        ref={userDropDownMenuRef}
      >
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400  "
            href="#"
            data-te-dropdown-item-ref
          >
            Profile
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400  "
            href="#"
            data-te-dropdown-item-ref
          >
            Log Out
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400  "
            href="#"
            data-te-dropdown-item-ref
          >
            Something else here
          </a>
        </li>
      </ul>
    );
  }
);

export default UserDeropDown;
