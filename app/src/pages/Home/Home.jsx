import React from "react";




function Home() {
  return (
    <div className="bg-[url(/src/assets/Background-home.png)] h-[100vh] bg-cover">
      <div className="flex text-center justify-center ">
        <div className="text-[100px]">
          <div class="text-[36px] p-[50px] mt-20 text-green-800">
            <h1
            >CEFR
            </h1>
            <p>MONSTER</p>
          </div>
          <div class="mt-90">
          <botton class="text-[32px] bg-amber-400 p-5 px-8 "
          >Play
          </botton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
