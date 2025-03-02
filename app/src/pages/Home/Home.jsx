import React, { useEffect, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { User } from "lucide-react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const storagetm = Cookies.get("tmlevel");
  const storagehm = Cookies.get("hmlevel");
  const levels = [
    { id: 1, x: "76%", y: "88%", isOpen: true },
    { id: 2, x: "33%", y: "80%", isOpen: false },
    { id: 3, x: "9%", y: "72%", isOpen: false },
    { id: 4, x: "27%", y: "63%", isOpen: false },
    { id: 5, x: "64%", y: "54%", isOpen: false },
    { id: 6, x: "15%", y: "46%", isOpen: false },
    { id: 7, x: "63%", y: "37.9%", isOpen: false },
    { id: 8, x: "43%", y: "24.5%", isOpen: false },
    { id: 9, x: "67%", y: "16.5%", isOpen: false },
    { id: 10, x: "32%", y: "8.5%", isOpen: false },
  ];
  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const navigate = useNavigate();
  const [isTap, setIsTap] = useState(false);

  const handleNext = () => {
    setIsTap(true);
    setTimeout(() => {
      navigate("/mode");
    }, 500);
  };

  useEffect(() => {
    if (!storagetm) {
      Cookies.remove("tmlevel");
      Cookies.set("tmlevel", JSON.stringify(levels));
    }
    if (!storagehm) {
      Cookies.remove("hmlevel");
      Cookies.set("hmlevel", JSON.stringify(levels));
    }
  }, []);

  return (
    <div className="relative bg-[url(/src/assets/Home-Background.jpg)] bg-center h-screen bg-cover bg-no-repeat overflow-hidden font-game text-[50px]">
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={isTap ? { x: "-100vw", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <motion.div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%", transition: { duration: 0.3 } }}
            className="absolute justify-items-center w-full text-[5vh] -space-y-4 top-[10%] text-center text-yellow text-stroke-black"
          >
            <h1>CEFR</h1>
            <p>MONSTER</p>
          </motion.div>
          <div className="absolute top-[26%] left-[5vw]">
            <img className="h-full w-[80vw]" src="/Idle2.gif" />
          </div>
          <div className="absolute top-[76%] w-full text-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="px-6 py-1 text-[30px] bg-yellow border-2 border-black "
            >
              Play
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      {isVolumeOn ? (
        <div className="absolute top-[90%] left-[8%] bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <Volume2
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="sm:ml-[0vw] ml-[1.5vw]"
          />
        </div>
      ) : (
        <div className="absolute top-[90%] left-[8%] bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <VolumeOff
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="sm:ml-[0vw] ml-[1.5vw]"
          />
        </div>
      )}
      <a href="/member">
        <div className="absolute top-[90%] left-[80%] bg-[#C8EDE0] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <User strokeWidth={1} size={40} className="sm:ml-[0vw] ml-[1.5vw]" />
        </div>
      </a>
        </div>

  );
}

export default Home;
