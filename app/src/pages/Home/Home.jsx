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
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-[100vh] bg-cover bg-no-repeat overflow-hidden">
      <div className="flex text-center justify-center font-game ">
        <div className="text-[50px]">
          <div className="text-[46px] p-[50px] mt-12 text-[#31744A] text-stroke-black">
            <h1 className="">CEFR</h1>
            <p>MONSTER</p>
          </div>
          <div className="absolute  content-center justify-items-center w-full top-[200px]">
            <img className=" w-[368px] h-[460px] " src="/Idle2.gif"></img>
          </div>
          <div className="mt-90">
            <a href="/mode">
              <button className="text-[30px] bg-[#FFA032] p-5 px-10  border-2 border-black ">
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
