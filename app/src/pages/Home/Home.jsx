import React, { useEffect } from "react";

function Home() {
  const storagetm = localStorage.getItem("tmlevel");
  const storagehm = localStorage.getItem("hmlevel");
  const levels = [
    { id: 1, x: "76%", y: "88%", isOpen: true },
    { id: 2, x: "33%", y: "80%", isOpen: false },
    { id: 3, x: "9%", y: "72%", isOpen: false },
    { id: 4, x: "27%", y: "63%", isOpen: false },
    { id: 5, x: "64%", y: "54%", isOpen: false },
    { id: 6, x: "15%", y: "46%", isOpen: false },
    { id: 7, x: "63%", y: "37.9%", isOpen: false },
    { id: 8, x: "43%", y: "24.5%", isOpen: false },
    { id: 9, x: "67%", y: "16.5%", isOpen: false },
    { id: 10, x: "32%", y: "8.5%", isOpen: false },
  ];

  useEffect(() => {
    if (!storagetm) {
      localStorage.removeItem("tmlevel");
      localStorage.setItem("tmlevel", JSON.stringify(levels));
    }
    if (!storagehm) {
      localStorage.removeItem("hmlevel");
      localStorage.setItem("hmlevel", JSON.stringify(levels));
    }
  }, []);

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
              <button className="text-[30px] bg-[#E29F51] p-5 px-10  border-2 border-black ">
                Play
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
