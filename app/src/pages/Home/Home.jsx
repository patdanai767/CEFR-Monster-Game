import React from "react";





function Home() {
  return (
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-[100vh] bg-cover bg-no-repeat">
      <div className="flex text-center justify-center font-game ">
        <div className="text-[50px]">
          <div className="text-[46px] p-[50px] mt-12 text-[#31744A] text-stroke-black">
            <h1 className=""
            >CEFR
            </h1>
            <p>MONSTER</p>
          </div>
          <div className="absolute  content-center justify-items-center w-full top-[200px]">
          <img className=" w-[368px] h-[460px] " src="public/Idle2.gif"></img>
          </div>
          <div className="mt-90">
            <a href="/mode">
          <botton className="text-[30px] bg-[#FFA032] p-5 px-10  border-2 border-black "
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
