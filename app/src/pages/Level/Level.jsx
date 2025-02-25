import { Volume2, VolumeOff, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Level() {
  const router = useNavigate();
  const storagetm = JSON.parse(localStorage.getItem("hmlevel"));
  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const handleBack = () => {
    router("/mode");
  };

  const handleLevel = (level, isOpen) => {
    if (isOpen) {
      router(`/game/${level}`);
      return;
    }
    router("#");
  };

  return (
    /*background*/
    <div
      className="relative overflow-hidden bg-no-repeat h-screen bg-cover font-game"
      style={{ backgroundImage: "url('/backgroundlevel.png')" }}
    >
      {/* ปุ่มย้อนกลับ */}
      <div
        onClick={handleBack}
        className="absolute top-[4%] left-[8%] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] content-center justify-items-center"
      >
        <ChevronLeft strokeWidth={1} size={45} />
      </div>
      {isVolumeOn ? (
        <div className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <Volume2
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="ml-[1.5vw]"
          />
        </div>
      ) : (
        <div className="absolute top-[90%] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <VolumeOff
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="ml-[1.5vw]"
          />
        </div>
      )}
      {storagetm
        ? storagetm.map((level) => (
            <div
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
            </div>
          ))
        : ""}
    </div>
  );
}
