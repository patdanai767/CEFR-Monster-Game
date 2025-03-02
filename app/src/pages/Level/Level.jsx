import { Volume2, VolumeOff, ChevronLeft, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import backgrounds from "../../backgrounds/backgrounds";
import { useMusic } from "../../provider/MusicProvide";

export default function Level() {
  const router = useNavigate();
  const storagetm = JSON.parse(Cookies.get("hmlevel"));
  const { isVolumeOn, setIsVolumeOn } = useMusic();
  const [isTap, setIsTap] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);

  useEffect(() => {
    if (Cookies.get("hmlevel") === undefined || Cookies.get("tmlevel") === undefined) {router("/")};
  }, []);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const handleBack = () => {
    router("/mode");
  };

  const handleLevel = (level, isOpen) => {
    if (isOpen) {
      setIsTap(true);
      setCurrentLevel(level);
      setTimeout(() => {
        window.location.href = `/game/${level}`;
      }, 400);
      return;
    }
    router("#");
  };

  const levelNumber = `lvl${currentLevel || 1}`;

  return (
    /*background*/
    <div
      className="relative overflow-hidden bg-no-repeat h-screen bg-cover font-game"
      style={{ backgroundImage: `url(${backgrounds[levelNumber]})` }}
    >
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          isTap
            ? {
                x: "-100vw",
                y: 0,
                opacity: 1,
                transition: { duration: 0.4 },
              }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative overflow-hidden bg-no-repeat h-screen bg-cover font-game"
        style={{ backgroundImage: "url('/backgroundlevel.png')" }}
      >
        {/* ปุ่มย้อนกลับ */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={handleBack}
          className="absolute top-[4%] left-[8%] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] content-center justify-items-center"
        >
          <ChevronLeft strokeWidth={1} size={45} />
        </motion.div>
        {isVolumeOn ? (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center"
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
            className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center"
          >
            <VolumeOff
              strokeWidth={1}
              size={40}
              onClick={handleVolume}
              className="sm:ml-[0vw] ml-[1.5vw]"
            />
          </motion.div>
        )}
        {storagetm
          ? storagetm.map((level) => (
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => handleLevel(level.id, level.isOpen)}
                key={level.id}
                className={`absolute w-[56px] h-[56px] rounded 
            ${
              level.isOpen
                ? `${
                    level.isWin
                      ? `${
                          level.id === 10
                            ? "bg-red text-yellow"
                            : "bg-yellow text-black"
                        }`
                      : `${
                          level.id === 10
                            ? "bg-red text-yellow"
                            : "bg-green text-black"
                        }`
                  }`
                : "bg-[#856360] text-black"
            } 
            font-bold flex justify-center items-center text-xl`}
                style={{ left: level.x, top: level.y }}
              >
                {level.id}
              </motion.div>
            ))
          : ""}
      </motion.div>
    </div>
  );
}
