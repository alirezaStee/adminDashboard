import React from "react";

export default function LoadingSpiner() {
  return (
    <div
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] z-[999999999999]"
      role="status"
    ></div>
  );
}
