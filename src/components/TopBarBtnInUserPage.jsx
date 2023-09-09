import React from "react";

export default function TopBarBtnInUserPage({ onClick, color, children ,title}){
  const colorVariants = {
    green: 'border-green-500 bg-green-500 hover:border-green-700 hover:bg-green-700 focus:ring-green-200 disabled:border-green-300 disabled:bg-green-300',
    violet: 'border-violet-500 bg-violet-500 hover:border-violet-700 hover:bg-violet-700 focus:ring-violet-200 disabled:border-violet-300 disabled:bg-violet-300',

  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center ${colorVariants[color]}  rounded-lg border  px-3 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all focus:ring  disabled:cursor-not-allowed  `}
    >
      {children}
     <span className="ml-2">{title}</span>
    </button>
  );
}
