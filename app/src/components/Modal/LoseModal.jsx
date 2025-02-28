import React from "react";
import { useLocation } from "react-router-dom";

export default function LoseModal() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="sm:justify-items-center sm:left-[0%] left-[12vw] relative top-[220px] w-full font-game z-[1000]">
      <div className="text-[32px] sm:-top-[20%] sm:left-[14%] -top-[14vw] -left-[3.6vw] absolute drop-shadow-2xl text-[#C76735] text-stroke-orange">
        YOU LOSE
      </div>
      <div className="rounded-sm w-3/4 border-3 grid text-[20px] overflow-hidden text-center px-8 py-7 gap-7 bg-[#C76735] border-[#862A00] text-[#E29F51] text-stroke-black">
        <div onClick={reset}>Retry</div>
        {pathname === "gametime" ? (
          <a href="/tmlevel" className="text-stroke-black">
            Back to menu
          </a>
        ) : (
          <a href="/hmlevel" className="text-stroke-black">
            Back to menu
          </a>
        )}
      </div>
    </div>
  );
}
