import { Volume2, VolumeOff, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Member() {
  const router = useNavigate();
  const [isVolumeOn, setIsVolumeOn] = useState(true);

  const handleBack = () => {
    router("/");
  };

  const handleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const members = [
    {
      id: "66010725",
      name: ["นางสาววณิชญา", "เรืองรักเรียน"],
      image: "/src/assets/IdleBow.gif",
    },
    {
      id: "66010935",
      name: ["นายอิทธิกร แป้นบางนา", ""],
      image: "/member1.jpg",
    },
    {
      id: "66011368",
      name: ["นายเตชะไพบูลย์", "สร้อยสระคู"],
      image: "/member1.jpg",
    },
    { id: "66011448", name: ["นายภัทรดนัย จำรัส", ""], image: "/member1.jpg" },
    { id: "66010583", name: ["นายพิรณัฐ จงรักดี", ""], image: "/member1.jpg" },
    { id: "66010608", name: ["นายภวดล เนื้อสะอาด", ""], image: "/member1.jpg" },
  ];

  return (
    <div
      className="bg-no-repeat relative h-screen bg-cover bg-center font-game p-4"
      style={{ backgroundImage: "url('/BackgroundMember.jpg')" }}
    >
      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={handleBack}
        className="absolute top-[4%] left-[8%] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[3px] flex justify-center items-center"
      >
        <ChevronLeft strokeWidth={1.7} size={45} />
      </button>

      {/* ปุ่มเสียง */}
      <button
        onClick={handleVolume}
        className="absolute top-[90%] left-[8%] bg-[#E29F51] w-[56px] h-[56px] rounded-full border-[2px] flex justify-center items-center"
      >
        {isVolumeOn ? (
          <Volume2
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="ml-[1.5vw]"
          />
        ) : (
          <VolumeOff
            strokeWidth={1}
            size={40}
            onClick={handleVolume}
            className="ml-[1.5vw]"
          />
        )}
      </button>

      {/* หัวข้อ Members Group 2 */}
      <div className="flex justify-center">
        <h1 className=" absolute top-21 text-[20px] text-[#C8EDE0] font-game text-stroke-black mt-4  border-black">
          Members Group 2
        </h1>
      </div>

      {/* Grid แสดงสมาชิก */}
      <div className="grid grid-cols-2 gap-2 mt-31 px-11">
        {members.map((member) => (
          <div key={member.id} className="justify-items-center text-center">
            {/* รูปภาพ */}
            <div className="h-[14vh] w-[15vh] rounded overflow-hidden">
              <img src={member.image} alt={member.name[0]} className="" />
            </div>
            {/* หมายเลข */}
            <div className=" text-[#C8EDE0] text-[1.75vh] text-stroke-black mt-1 ">
              {member.id}
            </div>

            {/* ชื่อ */}
            <div className="text-[#C8EDE0] font-gameth text-[14px] text-stroke-black ">
              {member.name[0]} <br /> {member.name[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
