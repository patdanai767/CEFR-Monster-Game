import React, { useState, useEffect } from "react";
import {
  Clock,
  WalletCards,
  Heart,
  ChevronLeft,
  HandHelping,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Volume2, VolumeOff } from "lucide-react";
import { motion } from "framer-motion";

function Mode() {
  const router = useNavigate();

  const handleBack = () => {
    router("/");
  };

  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const [isTap, setIsTap] = useState(false);

  const handleNextToHeartMode = () => {
    setIsTap(true);
    setTimeout(() => {
      router("/hmlevel");
    }, 500);
  };

  const handleNextToTimeMode = () => {
    setIsTap(true);
    setTimeout(() => {
      router("/tmlevel");
    }, 500);
  };

  const handleNextToFlashCardMode = () => {
    setIsTap(true);
    setTimeout(() => {
      router("/word");
    }, 500);
  };

  return (
    <div className="bg-[url(/src/backgrounds/bg-map.jpg)] relative overflow-hidden bg-no-repeat h-screen bg-cover">
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={handleBack}
        className="absolute top-[4%] left-[8%] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] content-center justify-items-center"
      >
        <ChevronLeft strokeWidth={1} size={45} />
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          isTap
            ? {
                x: "-100vw",
                y: 0,
                opacity: 1,
              }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-[url(/src/assets/Home-Background.jpg)] h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <motion.div
          initial={{ x: "100vw", y: 0, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex text-center justify-center font-game "
        >
          <div className="">
            <div className="text-[42px] p-[50px] sm:mt-27 mt-13 text-[#C8EDE0] text-stroke-black">
              <h1>Choose</h1>
              <p>mode</p>
            </div>
            <div className="mt-8 relative">
              <div className="absolute sm:-top-0 -top-[8vh]">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextToHeartMode}
                  className="text-[20px] w-[360px] h-[12vh] bg-[#E29F51]  border-3 flex items-center justify-center"
                >
                  Heart mode <Heart fill="red" size={30} className="ml-8" />
                </motion.div>
              </div>
              <div className="absolute sm:top-[15vh] top-[7vh]">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextToTimeMode}
                  className=" text-[20px] w-[360px] h-[12vh] bg-[#E29F51]  border-3 flex items-center justify-center"
                >
                  Time attack{" "}
                  <Clock fill="#C8EDE0" size={30} className="ml-8" />
                </motion.div>
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="absolute sm:top-[30vh] top-[22vh]"
              >
                Time attack <Clock fill="#C8EDE0" size={24} className="ml-8" />
              </motion.div>
              <motion.div whileTap={{ scale: 0.9 }} className="mt-12 mx-18">
                <a
                  href="/word"
                  className=" text-[20px] w-[360px] h-[68px] bg-green  border-3 flex items-center justify-center"
                >
                  Flashcard <WalletCards size={24} className="ml-8" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {isVolumeOn ? (
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute top-[90%] left-[8%] bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center"
        >
          <Volume2
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="sm:ml-[0vw] ml-[1.5vw]"
          />
        </motion.div>
      ) : (
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute top-[90%] left-[8%] bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center"
        >
          <VolumeOff
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="sm:ml-[0vw] ml-[1.5vw]"
          />
        </motion.div>
      )}
    </div>
  );
}

export default Mode;
