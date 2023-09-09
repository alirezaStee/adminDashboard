import React from "react";

export default function AnalyticsCart({
  title,
  children,
  count,
  increase,
  since,
}) {
  const colorVariants = {
    red: "text-red-500 bg-red-100",
    green: "text-green-500 bg-green-100",
  };
  return (
    <div className="flex w-full flex-col rounded-md bg-white p-4 shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-400">{title}</h3>
        <span className="flex items-center justify-center rounded-full bg-blue-100 p-2">
          {children}
        </span>
      </div>
      <div className="py-3 text-2xl">{count}</div>
      <div className="text-sm text-gray-400">
        <span
          className={`${
            increase >= 0 ? colorVariants.green : colorVariants.red
          } mr-2 rounded-md  p-[3px] text-center text-xs `}
        >
          {increase}%
        </span>
        Since last {since}
      </div>
    </div>
  );
}
