import React from "react";




function Home() {
  return (
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-[100vh] bg-cover bg-no-repeat">
      <div className="flex text-center justify-center font-game ">
        <div className="text-[50px]">
          <div className="text-[36px] p-[50px] mt-15 text-amber-500 text-stroke-black">
            <h1 className=""
            >CEFR
            </h1>
            <p>MONSTER</p>
          </div>
          <div className="mt-80 ">
            <a href="/mode">
          <botton className="text-[26px] bg-amber-500 p-5 px-10  border-2 border-black"
          >Play
          </botton>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
