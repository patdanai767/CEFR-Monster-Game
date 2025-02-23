import React from 'react'



export default function Level() {
  const levels = [
    { id: 1, x: "76%", y: "88%" },
    { id: 2, x: "33%", y: "80%" },
    { id: 3, x: "9%", y: "72%" },
    { id: 4, x: "27%", y: "63%" },
    { id: 5, x: "64%", y: "54%" },
    { id: 6, x: "15%", y: "46%" },
    { id: 7, x: "63%", y: "37.9%" },
    { id: 8, x: "43%", y: "24.5%" },
    { id: 9, x: "67%", y: "16.5%" },
    { id: 10, x: "32%", y: "8.5%" },
  ];

  return (
    
    /*background*/
    <div className="relative w-screen h-screen bg-cover bg-center font-game   " style={{ backgroundImage: "url('/backgroundlevel.png')" }}>
      
      {/* ปุ่มย้อนกลับ */}
      <button className="absolute top-6 left-6 bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] bg-contain bg-center  "
        style = {{ 
          backgroundImage: "url('/right-arrow.png')",
          backgroundSize: "30px 30px",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)"
        }}

        >
        
      </button>
      
      <button className="absolute top-[809px] left-7 bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] bg-contain bg-center " 
      
          style = {{ 
            backgroundImage: "url('/volume.png')",
            backgroundSize: "37px 37px",
            backgroundRepeat: "no-repeat"
          }} >

      </button>

      {levels.map((level) => (
        <div
          key={level.id}
          className={`absolute w-[56px] h-[56px] 
            ${level.id == 1  ? "bg-[#E29F51] text-black " : "bg-[#856360] text-black"} 
            font-bold flex justify-center items-center  shadow-md text-2xl`}
          style={{ left: level.x, top: level.y }}
        >
          {level.id }
        </div>
      ))}
    </div>
  );
}
