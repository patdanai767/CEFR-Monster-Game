import { useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMusic } from "../../provider/MusicProvide";

export default function PauseModal({ setIsPause, setIsRunning }) {
  const { isVolumeOn, setIsVolumeOn } = useMusic();
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
    <div className="justify-items-center relative top-[220px] w-full font-game z-[1000]">
      <div>
        {isVolumeOn ? (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="sm:left-[40%] sm:justify-items-center content-center -top-10 left-[27vw] absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#E29F51]"
          >
            <Volume2
              height={45}
              width={45}
              onClick={handleVolume}
              className="sm:ml-0 sm:mt-0 ml-[3.4vw]"
            />
          </motion.div>
        ) : (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="sm:left-[40%] sm:justify-items-center content-center -top-10 left-[27vw] absolute w-[80px] h-[80px] rounded-[100%] border-3 bg-[#C76735]"
          >
            <VolumeOff
              height={45}
              width={45}
              onClick={handleVolume}
              className="sm:ml-0 sm:mt-0 ml-[3.4vw]"
            />
          </motion.div>
        )}
      </div>
      <div className="rounded-sm border-3 border-black grid overflow-hidden text-center px-8 py-14 gap-7 bg-[#856360] text-[#E29F51] text-stroke-black">
        <div className="text-[32px] text-[#C8EDE0]">Pause</div>
        <motion.div whileTap={{ scale: 0.9 }} onClick={handleResume}>
          Resume
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} onClick={handleRetry}>
          Retry
        </motion.div>
        {pathname === "gametime" ? (
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/tmlevel"
            className="text-stroke-black"
          >
            Back to menu
          </motion.a>
        ) : (
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/hmlevel"
            className="text-stroke-black"
          >
            Back to menu
          </motion.a>
        )}
      </div>
    </div>
  );
}
