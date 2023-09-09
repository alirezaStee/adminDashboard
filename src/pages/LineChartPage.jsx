import React, { useEffect, useState } from "react";

import supabase from "../config/supabaseClinet";
import LineChartComponent from "../components/chart/LineChart";
import ErrorAlert from "../components/alert/ErrorAlert";
import LoadingAlert from "../components/alert/LoadingAlert";


export default function LineChartPage() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isErrorAlertShow, setIsErrorAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setisLoading(true);
      let { data: SalesData, error } = await supabase
        .from("SalesData")
        .select("*");
      setisLoading(false);
      if (SalesData) {
        setData(SalesData);
      } else {
        setIsErrorAlertShow(true);
        setErrorMessage(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div className=" grid rounded-md bg-white p-2 shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]">
      <h3 className="mb-1 text-2xl">slaes</h3>
      <LoadingAlert isAlertShow={isLoading}></LoadingAlert>
      <ErrorAlert
        isErrorAlertShow={isErrorAlertShow}
        errorMessage={errorMessage}
        setIsErrorAlertShow={setIsErrorAlertShow}
      ></ErrorAlert>
      <LineChartComponent data={data} grid={true} dataKey={'Sale'}></LineChartComponent>
    </div>
  );
}
