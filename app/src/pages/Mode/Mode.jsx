import React from "react";


function Mode() {
  return (
    <div className="bg-[url(/src/assets/Background-home.png)] h-[100vh] bg-cover">
      <div className="flex text-center justify-center ">
        <div className="text-[100px]">
          <div class="text-[36px] p-[50px] mt-20 text-green-800">
            <h1
            >Choose
            </h1>
            <p>mode</p>
          </div>
          <div class="mt-20 flex flex-col ">
          <botton class="text-[24px] bg-amber-400 p-5 px-8 "
          >Heart mode
          </botton>
          <botton class="mt-20 text-[24px] bg-amber-400 p-5 px-8 "
          >Time attack
          </botton>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mode;
