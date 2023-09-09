import CalenderPage from "./pages/CalenderPage";
import Home from "./pages/Home";
import LineChartPage from "./pages/LineChartPage";
import Users from "./pages/Users";
import Geography from "./pages/geographyChartPage/Geography";

let routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/calender",
    element: <CalenderPage />,
  },
  {
    path: "/geography",
    element: <Geography />,
  },
  {
    path: "/LineChart",
    element: <LineChartPage />,
  },
];

export default routes;
