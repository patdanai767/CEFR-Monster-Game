import React from "react";
import { Heart } from "lucide-react";
import { Clock } from "lucide-react";
import { WalletCards } from "lucide-react";





function Mode() {
  return (
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-[100vh] bg-cover">
      <botton className="inline-flex absolute left-[32px] top-[32px]">
        <a href="/" className="p-1 rounded border-2 text-black bg-[#E29F51] hover:text-white ">
          <svg className="w-9 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>

        </a>
      </botton>
      <div className="flex text-center justify-center font-game ">
        <div className="text-[100px]">



          <div className="text-[42px] p-[50px] mt-27 text-[#C8EDE0] text-stroke-black">
            <h1
            >Choose
            </h1>
            <p>mode</p>
          </div>
          <div className="mt-8 flex flex-col ">
            <div className="text-[20px] w-[360px] h-[68px] bg-[#E29F51] p-4 px-10 mx-18 border-3 flex items-center justify-center"
            >Heart mode <Heart fill="red" size={30} className="ml-8"/>
            </div>
            <botton className="mt-12 text-[20px] w-[360px] h-[68px] bg-[#E29F51] p-4 px-8 mx-18 border-3 flex items-center justify-center"
            >Time attack <Clock fill="#C8EDE0" size={30} className="ml-8"/>
            </botton>
            <botton className="mt-12 text-[20px] bg-lime-400 p-4 px-8 mx-18 border-3 flex items-center justify-center"
            >Flashcard <WalletCards  size={30} className="ml-8"/>
            </botton>
            
            

          </div>
          
                   
                  
        </div>
      </div>
    </div>
  );
}

export default Mode;
