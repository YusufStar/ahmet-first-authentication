import React from "react";
import LeftImage from "../assets/BackgroundImage.png";

function LeftContainer() {
  return (
    <div className="hidden md:block flex-1 h-full relative">
      <img
        className="h-full w-full rounded-3xl"
        draggable={false}
        src={LeftImage}
      />

      <div className="absolute flex flex-col left-0 p-6 top-0 h-screen w-full z-10">
        <div className="flex items-center h-min gap-5">
          <span className="text-white text-xs font-medium">A WISE QUOTE</span>

          <div className="w-20 h-[1px] bg-white/80" />
        </div>

        <div className="flex w-[200px] flex-col gap-2">
          <span className="text-[30px] font-semibold text-white">
            Get Everything You Want
          </span>

          <span className="text-[10px] text-white/50">
            You can get everything you want if you work hard, trust the process,
            and stick to the plan.
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
