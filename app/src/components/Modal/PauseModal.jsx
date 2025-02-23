import { useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function PauseModal({ setIsPause, setIsRunning }) {
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const handleResume = () => {
    setIsPause(true);
    setIsRunning(true);
  };

  return (
    <div className="justify-items-center absolute top-[220px] w-full font-game">
      <div>
        {isVolumeOn ? (
          <div className="left-[40%] -top-10 justify-items-center content-center absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#E29F51]">
            <Volume2 height={45} width={45} onClick={handleVolume} />
          </div>
        ) : (
          <div className="left-[40%] -top-10 justify-items-center content-center absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#C76735]">
            <VolumeOff height={45} width={45} onClick={handleVolume} />
          </div>
        )}
      </div>
      <div className="rounded-sm w-3/4 border-3 border-black grid overflow-hidden text-center px-8 py-14 gap-7 bg-[#856360] text-[#E29F51] text-stroke-black">
        <div className="text-[32px] text-[#C8EDE0]">Pause</div>
        <div onClick={handleResume}>Resume</div>
        <div onClick={handleRetry}>Retry</div>
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
