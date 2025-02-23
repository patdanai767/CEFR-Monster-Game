import { Volume2, VolumeOff, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Level() {
  const router = useNavigate();
  const storagetm = JSON.parse(localStorage.getItem("tmlevel"));
  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const handleBack = () => {
    router("/mode");
  };

  const handleLevel = (level, isOpen) => {
    if (isOpen) {
      router(`/gametime/${level}`);
      return;
    }
    router("#");
  };

  return (
    /*background*/
    <div
      className="relative w-screen h-screen bg-cover bg-center font-game"
      style={{ backgroundImage: "url('/background-game_2.png')" }}
    >
      {/* ปุ่มย้อนกลับ */}
      <div
        onClick={handleBack}
        className="absolute top-[32px] left-[32px] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] bg-contain bg-center content-center justify-items-center"
      >
        <ChevronLeft strokeWidth={1} size={45} />
      </div>
      {isVolumeOn ? (
        <div className="absolute top-[809px] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <Volume2 strokeWidth={1} size={40} onClick={handleVolume} />
        </div>
      ) : (
        <div className="absolute top-[809px] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <VolumeOff strokeWidth={1} size={40} onClick={handleVolume} />
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
            font-bold flex justify-center items-center shadow-md text-2xl`}
              style={{ left: level.x, top: level.y }}
            >
              {level.id}
            </div>
          ))
        : ""}
    </div>
  );
}
