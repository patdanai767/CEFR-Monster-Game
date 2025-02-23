import { Volume2, VolumeOff, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Level() {
  const router = useNavigate();
  const [tmlevel, setTmlevel] = useState([]);
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

  useEffect(() => {
    
    const savedlevel = JSON.parse(localStorage.getItem("tmlevel"));
    setTmlevel(levels.filter((level) => savedlevel.includes(level.id)));
    tmlevel.forEach((tmlvl) => console.log(tmlvl));
    levels.forEach((level) => console.log(level));
  }, []);

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const handleBack = () => {
    router("/mode");
  };

  const handleLevel = (level) => {
    router(`/gametime/${level}`);
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
      {levels.map((level) => (
        <div
          onClick={() => handleLevel(level.id)}
          key={level.id}
          className={`absolute w-[56px] h-[56px] rounded 
            ${
              level.isOpen
                ? "bg-[#C8EDE0] text-black "
                : "bg-[#856360] text-black"
            } 
            font-bold flex justify-center items-center shadow-md text-2xl`}
          style={{ left: level.x, top: level.y }}
        >
          {level.id}
        </div>
      ))}
    </div>
  );
}
