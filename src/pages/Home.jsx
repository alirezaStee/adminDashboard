import React, { useEffect, useState } from "react";
import AnalyticsCart from "../components/AnalyticsCart";
import LineChartComponent from "../components/chart/LineChart";
import supabase from "../config/supabaseClinet";
import Calendar from "react-calendar";
import PieChartComponent from "../components/chart/PieChart";
import BarChartComponent from "../components/chart/BarChart";
import ErrorAlert from "../components/alert/ErrorAlert";
import LoadingAlert from "../components/alert/LoadingAlert";
export default function Home() {
  const [salesData, setSalesData] = useState([]);
  const [browserUsageData, setBrowserUsageData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isErrorAlertShow, setIsErrorAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [calenderValue, setCalenderValue] = useState(new Date());
  useEffect(() => {
    const getData = async () => {
      setisLoading(true);

      let { data: SalesData, error } = await supabase
        .from("SalesData")
        .select("*");

      let { data: Piechart } = await supabase.from("Piechart").select("*");
      setBrowserUsageData(Piechart);
      setisLoading(false);
      if (SalesData) {
        setSalesData(SalesData);
      } else {
        setIsErrorAlertShow(true);
        setErrorMessage(error.message);
      }
    };
    getData();
  }, []);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <h1 className="mb-4 text-xl">
        <span className="font-bold">Analytics</span> Dashboard
      </h1>
      {/* top main part */}
      <div className="mb-5 grid grid-cols-12 grid-rows-3 gap-4 sm:grid-rows-2 lg:grid-rows-1">
        <div className="col-span-full grid gap-4  sm:col-span-6 lg:col-span-3">
          <AnalyticsCart title={"Sales"} count={2.382} increase={-3.65}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </AnalyticsCart>
          <AnalyticsCart title={"Visitors"} count={14.212} increase={5.25}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </AnalyticsCart>
        </div>

        <div className="col-span-full grid gap-4  sm:col-span-6 lg:col-span-3">
          <AnalyticsCart title={"Earning"} count={"$21.300"} increase={6.65}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </AnalyticsCart>
          <AnalyticsCart title={"Orders"} count={64} increase={-2.25}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </AnalyticsCart>
        </div>
        {/* LineChartComponent */}
        <div className=" col-span-full  box-border grid  rounded-md bg-white p-4 shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)] lg:col-span-6">
          <h4 className="mb-3  font-medium text-gray-400">Sales</h4>
          <LineChartComponent
            data={salesData}
            grid={false}
            dataKey={"Sale"}
          ></LineChartComponent>
        </div>
      </div>
      {/* botton main part */}
      <div className="grid grid-cols-12 grid-rows-3 gap-4 sm:grid-rows-2  lg:grid-cols-11 lg:grid-rows-1">
        {/* Calendar */}
        <div className="col-span-full flex flex-col  rounded-md bg-white p-4 shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)] sm:col-span-6 lg:order-1 lg:col-span-3">
          <h4 className="mb-3 font-medium text-gray-400">Calendar</h4>
          <div className="flex flex-1 items-center justify-center">
            <Calendar onChange={setCalenderValue} value={calenderValue} />
          </div>
        </div>
        {/* PieChartComponent */}
        <div className="col-span-full flex  flex-col rounded-md bg-white p-4 shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]   sm:col-span-6 lg:order-3 lg:col-span-3">
          <h4 className="mb-3  font-medium text-gray-400">Browser Usage</h4>
          <div className="flex justify-center">
            <PieChartComponent
              data={browserUsageData}
              dataKey={"value"}
            ></PieChartComponent>
          </div>
          {browserUsageData
            .sort((a, b) => b.value - a.value)
            .map((usage, index) => (
              <div
                key={usage.id}
                className="flex items-center justify-between border-b p-2"
              >
                <div>
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span> {usage.name}</span>
                </div>
                <div>{usage.value}</div>
              </div>
            ))}
        </div>

        <div className="col-span-full  grid rounded-md bg-white p-4   shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)] sm:col-span-12 lg:order-2 lg:col-span-5">
          <h4 className="mb-3  font-medium text-gray-400">Browser Usage</h4>
          <BarChartComponent
            data={salesData}
            dataKey={"Sale"}
          ></BarChartComponent>
        </div>
      </div>

      <ErrorAlert
        errorMessage={errorMessage}
        isErrorAlertShow={isErrorAlertShow}
        onClose={() => {
          setIsErrorAlertShow(false);
        }}
      ></ErrorAlert>

      <LoadingAlert isAlertShow={isLoading}></LoadingAlert>
    </div>
  );
}
