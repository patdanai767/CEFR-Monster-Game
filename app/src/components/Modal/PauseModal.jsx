import React, { useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

export default function PauseModal() {
  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  return (
    <div className="justify-items-center absolute top-[220px] w-full font-game">
      {isVolumeOn ? (
        <div className="left-42 -top-10 justify-items-center content-center absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#E29F51]">
          <Volume2 height={45} width={45} onClick={handleVolume} />
        </div>
      ) : (
        <div className="left-42 -top-10 justify-items-center content-center absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#E29F51]">
        <VolumeOff height={45} width={45} onClick={handleVolume} />
      </div>
      )}
      <div className="rounded-sm w-3/4 border-3 border-black grid overflow-hidden text-center px-8 py-14 gap-7 bg-[#856360] text-[#E29F51] text-stroke-black">
        <div className="text-[32px]">Pause</div>
        <div>Resume</div>
        <div>Retry</div>
        <div>Back to Menu</div>
      </div>
    </div>
  );
}
