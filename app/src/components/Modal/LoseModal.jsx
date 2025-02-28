import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoseModal() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const reset = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ x: "100vw", y: 0, opacity: 1 }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="sm:justify-items-center sm:left-[0%] left-[12vw] relative top-[220px] w-full font-game z-[1000]"
    >
      <div className="text-[32px] sm:-top-[20%] sm:left-[14%] -top-[14vw] -left-[3.6vw] absolute drop-shadow-2xl text-[#C76735] text-stroke-orange">
        YOU LOSE
      </div>
      <div className="rounded-sm w-3/4 border-3 grid text-[20px] overflow-hidden text-center px-8 py-7 gap-7 bg-[#C76735] border-[#862A00] text-[#E29F51] text-stroke-black">
        <motion.div whileTap={{ scale: 0.9 }} onClick={reset}>
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
    </motion.div>
  );
}
