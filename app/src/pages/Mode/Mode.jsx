import React, { useState } from "react";
import {
  Clock,
  WalletCards,
  Heart,
  ChevronLeft,
  HandHelping,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Mode() {
  const router = useNavigate();

  const handleBack = () => {
    router("/");
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

  return (
    <div className="bg-[url(/src/backgrounds/bg-map.jpg)] h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
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
          whileTap={{ scale: 0.9 }}
          onClick={handleBack}
          className="absolute top-[32px] left-[32px] bg-yellow w-[48px] h-[48px] rounded-[4px] border-[2px] bg-contain bg-center content-center justify-items-center"
        >
          <ChevronLeft strokeWidth={1} size={45} />
        </motion.div>
        <motion.div
          initial={{ x: "100vw", y: 0, opacity: 1 }}
          animate={
            { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex text-center justify-center font-game "
        >
          <div className="">
            <div className="text-[42px] p-[50px] mt-27 text-mint text-stroke-black">
              <h1>Choose</h1>
              <p>mode</p>
            </div>
            <div className="mt-8 flex flex-col ">
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={handleNextToHeartMode}
                className="mx-18 text-[20px] w-[360px] h-[68px] bg-yellow  border-3 flex items-center justify-center"
              >
                Heart mode <Heart fill="red" size={24} className="ml-8" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={handleNextToTimeMode}
                className="mt-12 mx-18 text-[20px] w-[360px] h-[68px] bg-yellow border-3 flex items-center justify-center"
              >
                Time attack <Clock fill="#C8EDE0" size={24} className="ml-8" />
              </motion.div>
              <motion.div whileTap={{ scale: 0.9 }} className="mt-12 mx-18">
                <div
                  href="#"
                  className=" text-[20px] w-[360px] h-[68px] bg-green  border-3 flex items-center justify-center"
                >
                  Flashcard <WalletCards size={24} className="ml-8" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Mode;
