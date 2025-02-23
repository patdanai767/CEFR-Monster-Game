import React from "react";


function Mode() {
  return (
    <div className="bg-[url(/src/assets/Background-home.png)] h-[100vh] bg-cover">
      <div className="flex text-center justify-center ">
        <div className="text-[100px]">
          <div className="text-[36px] p-[50px] mt-20 text-green-800">
            <h1
            >Choose
            </h1>
            <p>mode</p>
          </div>
          <div className="mt-12 flex flex-col ">
          <botton className="text-[18px] bg-amber-400 p-4 px-8 mx-18"
          >Heart mode
          </botton>
          <botton className="mt-12 text-[18px] bg-amber-400 p-4 px-8 mx-18"
          >Time attack
          </botton>
          <botton className="mt-12 text-[18px] bg-lime-400 p-4 px-8 mx-18"
          >Flashcard
          </botton>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mode;
