import React from "react";
import elon from "./elon.jpg";

export default function sidebar() {
  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-center">
        <div className=" h-14 w-48 mt-14 mb-6 border-y-4 border-gray-300 text-gray-300 text-center  text-3xl ">
          <h1 className="mt-1">LOGO HERE</h1>
        </div>
      </div>
      <div className=" flex-col justify-center items-center mt-8 ">
        <div className=" hover:bg-blue-200 hover:bg-opacity-50 p-2 rounded-lg mb-[8px] hover:text-blue-600 text-center mx-6 hover:cursor-pointer text-lg ">
          Overview
        </div>
        <div className=" hover:bg-blue-200 hover:bg-opacity-50 p-2 rounded-lg mb-[8px] hover:text-blue-600 text-center mx-6 hover:cursor-pointer text-lg ">
          Onboarding
        </div>
        <div className=" hover:bg-blue-200 hover:bg-opacity-50 p-2 rounded-lg mb-[8px] hover:text-blue-600 text-center mx-6 hover:cursor-pointer text-lg ">
          Monitorring
        </div>
        <div className=" hover:bg-blue-200 hover:bg-opacity-50 p-2 rounded-lg mb-[8px] hover:text-blue-600 text-center mx-6 hover:cursor-pointer text-lg ">
          Flagging
        </div>
        <div className=" hover:bg-blue-200 hover:bg-opacity-50 p-2 rounded-lg mb-[8px] hover:text-blue-600 text-center mx-6 hover:cursor-pointer text-lg ">
          Source of Income
        </div>
      </div>
      
      <div className="flex  fixed bottom-6 left-4">
        <img
          src={elon}
          alt=""
          className="rounded-full overflow-hidden w-10 h-10 mt-1"
        />
        <div className="flex flex-col ml-3">
          <h2 className="text-lg font-bold">Elon Musk</h2>
          <p className="text-sm">elon@twitter.com</p>
        </div>
      </div>
    </div>
  );
}
