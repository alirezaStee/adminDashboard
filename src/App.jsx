import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import supabase from "./config/supabaseClinet";

function App() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const router = useRoutes(routes);

  return (
    <>
      <Slider isSliderOpen={isSliderOpen}></Slider>
      <div
        className="flex min-h-screen w-full flex-col   transition-all duration-700 open:ml-[264px]  md:w-auto"
        open={isSliderOpen}
      >
        <Navbar
          isSliderOpen={isSliderOpen}
          setIsSliderOpen={setIsSliderOpen}
        ></Navbar>
        <div className="grid flex-1  bg-[#f5f7fb] p-4 md:p-8">{router}</div>
      </div>
    </>
  );
}

export default App;
