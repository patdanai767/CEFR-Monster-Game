import React from "react";

export default function WinModal() {
  const handleRetry = () => {
    window.location.reload();
  };
  return (
    <div className="justify-items-center absolute top-[200px] w-full font-game">
      <div className="text-[32px] drop-shadow-2xl text-[#2E5B3F] text-stroke-lime">
        YOU WIN
      </div>
      <div className="rounded-sm w-3/4 border-3 grid text-[20px] overflow-hidden text-center px-8 py-7 gap-7 bg-[#2E5B3F] border-[#C5E369] text-[#E29F51] text-stroke-black">
        <div>Next</div>
        <div onClick={handleRetry}>Retry</div>
        <div>Back to Menu</div>
      </div>
    </div>
  );
}
