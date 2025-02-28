import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WinModal({ onNext }) {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const params = useParams();

  const handleNext = () => {
    onNext();
    setTimeout(() => {
      window.location.href =
        pathname === "gametime"
          ? `/gametime/${Number(params.id) + 1}`
          : `/game/${Number(params.id) + 1}`;
    }, 500);
  };

  const handleRetry = () => {
      window.location.reload();
  };

  return (
    <motion.div
      initial={{ x: "-100vw", y: 0, opacity: 1 }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="left-[12vw] relative top-[200px] w-full font-game z-[1000]"
    >
      <div className="text-[32px] -top-[14vw] absolute drop-shadow-2xl text-[#2E5B3F] text-stroke-lime">
        YOU WIN
      </div>
      <div className="rounded-sm w-3/4 border-3 grid text-[20px] overflow-hidden text-center px-8 py-7 gap-7 bg-[#2E5B3F] border-[#C5E369] text-[#E29F51] text-stroke-black">
        <motion.a
          whileTap={{ scale: 0.9 }}
          className="text-stroke-black"
          onClick={handleNext}
        >
          Next
        </motion.a>
        <motion.div whileTap={{ scale: 0.9 }} onClick={handleRetry}>
          Retry
        </motion.div>
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={pathname === "gametime" ? "/tmlevel" : "/hmlevel"}
          className="text-stroke-black"
        >
          Back to menu
        </motion.a>
      </div>
    </motion.div>
  );
}
