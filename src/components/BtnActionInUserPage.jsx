import React from "react";

export default function BtnActionInUserPage({ onClick, color, children }) {
  const colorVariants = {
    red: "border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 focus:ring-red-200  disabled:border-red-300 disabled:bg-red-300",
    blue: "border-blue-600 bg-blue-600 hover:border-blue-700 hover:bg-blue-700 focus:ring-blue-200  disabled:border-blue-300 disabled:bg-blue-300",
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center gap-1.5  rounded-full border   px-2 py-2 text-center text-sm font-medium text-white shadow-sm transition-all   disabled:cursor-not-allowed ${colorVariants[color]}`}
    >
      {children}
    </button>
  );
}
