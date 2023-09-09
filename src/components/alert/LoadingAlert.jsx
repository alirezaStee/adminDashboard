import React, { useEffect, useState } from "react";
import LoadingSpiner from "./LoadingSpiner";

export default function LoadingAlert({isAlertShow}) {

  return (
    <>
      <div
        className=" fixed right-0 top-2  hidden  text-white open:block"
        open={isAlertShow}
      >
        <div className="order-first flex  justify-between rounded bg-blue-400 px-4 py-3 text-white">
        <LoadingSpiner></LoadingSpiner>
        </div>
      </div>
    </>
  );
}
