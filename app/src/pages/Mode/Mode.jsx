import React from "react";
import { Clock, WalletCards, Heart, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Mode() {
  const router = useNavigate();

  const handleBack = () => {
    router("/");
  };
  return (
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-screen bg-cover bg-no-repeat overflow-hidden">
      <div
        onClick={handleBack}
        className="absolute top-[32px] left-[32px] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] bg-contain bg-center content-center justify-items-center"
      >
        <ChevronLeft strokeWidth={1} size={45} />
      </div>
      <div className="flex text-center justify-center font-game ">
        <div className="">
          <div className="text-[42px] p-[50px] mt-27 text-[#C8EDE0] text-stroke-black">
            <h1>Choose</h1>
            <p>mode</p>
          </div>
          <div className="mt-8 flex flex-col ">
            <div className="mx-18">
              <a
                href="/hmlevel"
                className=" text-[20px] w-[360px] h-[68px] bg-[#E29F51]  border-3 flex items-center justify-center"
              >
                Heart mode <Heart fill="red" size={30} className="ml-8" />
              </a>
            </div>
            <div className="mt-12 mx-18">
              <a
                href="/tmlevel"
                className=" text-[20px] w-[360px] h-[68px] bg-[#E29F51]  border-3 flex items-center justify-center"
              >
                Time attack <Clock fill="#C8EDE0" size={30} className="ml-8" />
              </a>
            </div>
            <div className="mt-12 mx-18">
              <a
                href="/Word"
                className=" text-[20px] w-[360px] h-[68px] bg-[#C5E369]  border-3 flex items-center justify-center"
              >
                Flashcard <WalletCards size={30} className="ml-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mode;
