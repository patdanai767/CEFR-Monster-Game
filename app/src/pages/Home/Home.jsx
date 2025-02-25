import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const storagetm = localStorage.getItem("tmlevel");
  const storagehm = localStorage.getItem("hmlevel");
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

  const navigate = useNavigate();
  const [isTap, setIsTap] = useState(false);

  const handleButton = () => {
    setIsTap(true);
    setTimeout(() => {
      navigate("/mode");
    }, 500);
  };

  useEffect(() => {
    if (!storagetm) {
      localStorage.removeItem("tmlevel");
      localStorage.setItem("tmlevel", JSON.stringify(levels));
    }
    if (!storagehm) {
      localStorage.removeItem("hmlevel");
      localStorage.setItem("hmlevel", JSON.stringify(levels));
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
            <img className="h-fit w-[80vw]" src="/Idle2.gif" />
          </div>
          <div className="absolute top-[76%] w-full text-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleButton}
              className="px-6 py-1 text-[30px] bg-yellow border-2 border-black "
            >
              Play
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
