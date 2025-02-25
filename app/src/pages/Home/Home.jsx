import React from "react";
import { useState } from "react";
import { Volume2, VolumeOff, ChevronLeft } from "lucide-react";
import { PersonStanding } from "lucide-react";


function Home() {
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  return (
    <div className="relative bg-[url(/src/assets/Home-Background.jpg)] bg-center h-screen bg-cover bg-no-repeat overflow-hidden">
      <div className="font-game ">
        <div className="text-[50px]">
          <div className="absolute justify-items-center w-full text-[5vh] -space-y-4 top-[10%] text-center text-[#E29F51] text-stroke-black">
            <h1>CEFR</h1>
            <p>MONSTER</p>
          </div>
          <div className="absolute top-[26%] left-[5vw]">
              <img className="h-full w-[80vw]" src="/Idle2.gif" />
          </div>
          <div className="absolute top-[76%] w-full text-center">
            <a href="/mode">
              <button className="px-6 py-1 text-[30px] bg-[#E29F51] border-2 border-black ">
                Play
              </button>
            </a>
          </div>
        </div>
        <ChevronLeft strokeWidth={1} size={45} />
      {isVolumeOn ? (
        <div className="absolute top-[809px] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <Volume2 strokeWidth={1} size={40} onClick={handleVolume} />
        </div>
      ) : (
        <div className="absolute top-[809px] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <VolumeOff strokeWidth={1} size={40} onClick={handleVolume} />
        </div>
      )}
      <a href="">
      <div className="absolute top-[809px] left-80 bg-[#C8EDE0] w-[56px] h-[56px] rounded-full border-[2px] content-center justify-items-center">
          <PersonStanding strokeWidth={1} size={40}  />
        </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
