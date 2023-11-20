import React from "react";
import Mainbar from "./Components/Mainbar";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <div className="flex ">
      <div className="w-[258px]  max-h-full border-r-4 border-opacity-50 border-gray-300">
        <Sidebar />
      </div>
      <div className="h-screen w-full">
        <Mainbar />
      </div>
    </div>
  );
}
