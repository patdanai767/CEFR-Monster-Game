import { Volume2, VolumeOff, ChevronLeft, Scale } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

export default function Level() {
  const router = useNavigate();
  const storagetm = JSON.parse(Cookies.get("hmlevel"));
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [isTap, setIsTap] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(null);

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
        router(`/game/${level}`);
      }, 400);
      return;
    }
    router("#");
  };

  const levelNumber = `lvl${currentLevel || 1}`;

  return (
    /*background*/
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
        <motion.div whileTap={{ scale: 0.9 }} className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <Volume2
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="sm:ml-[0vw] ml-[1.5vw]"
          />
        </motion.div>
      ) : (
        <motion.div whileTap={{ scale: 0.9 }} className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
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
                ? "bg-[#C8EDE0] text-black"
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
