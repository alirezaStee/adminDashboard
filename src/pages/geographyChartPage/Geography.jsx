import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "./geoData";
// import data from "./data";
import { useEffect, useMemo, useState } from "react";
import supabase from "../../config/supabaseClinet";
import ErrorAlert from "../../components/alert/ErrorAlert";
import LoadingAlert from "../../components/alert/LoadingAlert";


function Geography() {
  const [data, setData] = useState([]);

  // handel LoadingAlert
  const [isLoadingAlertShow, setIsLoadingAlertShow] = useState(false);

  // handel error alert
  const [isErrorAlertShow, setIsErrorAlertShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // function get contry data
  const getContry = async () => {
    setIsLoadingAlertShow(true);
    let { data: countries, error } = await supabase
      .from("countries")
      .select("*");
    if (error) {
      setIsErrorAlertShow(true);
      setErrorMessage(error.message);
    } else {
      setData(countries);
    }

    setIsLoadingAlertShow(false);
  };

  //  getting data contry
  useEffect(() => {
    getContry();
  }, []);

  //   const [scale, setScale] = useState(100);
  //   const [projectionTranslation, setProjectionTranslation] = useState([
  //     0.5, 0.5,
  //   ]);
  //   const [panning, setPanning] = useState(false);
  //   const [panStart, setPanStart] = useState({ x: 100, y: 100 });
  //   const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  //   const handleWheel = (e) => {
  //     setScale((pre) => Math.min(Math.max(100, (pre += e.deltaY * -0.3)), 400));
  //   };
  //   const handleMouseDown = (e) => {
  //     e.preventDefault();
  //     setPanning(true);
  //     setPanStart({ x: e.clientX, y: e.clientY });
  //   };
  //   const handleMouseMove = (e) => {
  //     if (!panning) return;
  //     const offsetX = e.clientX - panStart.x;
  //     const offsetY = e.clientY - panStart.y;

  // setPanStart({ x: e.clientX, y: e.clientY });

  //     if (100 < scale < 400) {
  //       setPanOffset((prevOffset) => ({
  //         x: (prevOffset.x + offsetX) / 1000,
  //         y: (prevOffset.y + offsetY) / 1000,
  //       }));
  //     } else {
  //       setPanOffset({ x: 0.5, y: 0.5 });
  //     }
  //     console.log(e.movementX)
  //   };

  //   const handleMouseUp = () => {
  //     setPanning(false);
  //   };
  return (
    <div
      className="h-f w-full bg-white rounded-md shadow-[0_0_0.875rem_0_rgba(33,37,41,.05)]"
      // onWheel={handleWheel}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
    >
      <LoadingAlert isAlertShow={isLoadingAlertShow}></LoadingAlert>

      <ErrorAlert
        errorMessage={errorMessage}
        isErrorAlertShow={isErrorAlertShow}
        onClose={() => {
          setIsErrorAlertShow(false);
        }}
      ></ErrorAlert>

      <ResponsiveChoropleth
        features={useMemo(() => {
          return geoData.features;
        }, [])}
        projectionScale={110}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[0, 1000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        tooltip={({ feature }) => {
          if (feature.value) {
            return (
              <span className="flex items-center justify-between bg-white p-2 text-sm">
                <div
                  className="h-3 w-3"
                  style={{ backgroundColor: feature.color }}
                ></div>
                {feature.label}: {feature.formattedValue} User
              </span>
            );
          }
        }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",

                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
export default Geography;
