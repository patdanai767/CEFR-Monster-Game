import React from "react";




function Home() {
  return (
    <div className="bg-[url(/src/assets/Home-Background.jpg)] h-[100vh] bg-cover">
      <div className="flex text-center justify-center ">
        <div className="text-[100px]">
          <div className="text-[36px] p-[50px] mt-15 text-amber-500 ">
            <h1 className=""
            >CEFR
            </h1>
            <p>MONSTER</p>
          </div>
          <div className="mt-90">
            <a href="/mode">
          <botton className="text-[32px] bg-amber-500 p-5 px-8 border-2 border-black"
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
