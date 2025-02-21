import React from "react";

export default function Game() {
  return (
    <div className="grid bg-[url('/background-game_2.png')] bg-no-repeat bg-cover h-screen">
      <div className="box1 h-[70vh]">
        <div class="Choice_Box" className="w-full inline-flex justify-center">
          <div className="w-20 ">Choice 1</div>
          <div className="w-20 ">test</div>
        </div>
        <div className="gif_box pt-100 flex justify-center">
          <img
            className=" w-[197px] h-[246px] "
            src="Idle.gif"
            alt="Human"
          ></img>
          <div className="pt-14.5">
            <img className=" w-[196px] h-[140px]" src="boaridle.gif"></img>
          </div>
        </div>
      </div>
      <div className="box2 h-[30vh]">
        <div
          class="Choice_Box"
          className="w-full inline-flex gap-5 justify-center pt-5  "
        >
          <button
            type="button"
            className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl "
          >
            กล้วย
          </button>
          <button className="w-[160px] h-[65px] bg-[#E29F51] text-center border-2 text-2xl ">
            ส้ม
          </button>
        </div>
      </div>
    </div>
  );
}
