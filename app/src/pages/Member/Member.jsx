import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Member() {
  const router = useNavigate();

  const handleBack = () => {
    router("/");
  };

  const members = [
    {
      id: "66010583",
      name: ["นายพิรณัฐ จงรักดี", ""],
      image: "/IdleGet.gif",
    },
    {
      id: "66010608",
      name: ["นายภวดล เนื้อสะอาด", ""],
      image: "/IdlePhu.gif",
    },
    {
      id: "66010725",
      name: ["นางสาววณิชญา", "เรืองรักเรียน"],
      image: "/IdleBow.gif",
    },
    {
      id: "66010935",
      name: ["นายอิทธิกร แป้นบางนา", ""],
      image: "/IdlePeem.gif",
    },
    {
      id: "66011368",
      name: ["นายเตชะไพบูลย์", "สร้อยสระคู"],
      image: "/IdleFord.gif",
    },
    {
      id: "66011448",
      name: ["นายภัทรดนัย จำรัส", ""],
      image: "/IdlePat.gif",
    },
  ];

  useEffect(() => {
    if (Cookies.get("hmlevel") === undefined || Cookies.get("tmlevel") === undefined) {router("/")};
  }, []);

  return (
    <div
      className="bg-no-repeat relative h-screen bg-cover bg-center font-game p-4"
      style={{ backgroundImage: "url('/BackgroundMember.jpg')" }}
    >
      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={handleBack}
        className="absolute top-[4%] left-[8%] bg-[#E29F51] w-[48px] h-[48px] rounded-[4px] border-[2px] content-center justify-items-center"
      >
        <ChevronLeft strokeWidth={1} size={45} />
      </button>

      {/* หัวข้อ Members Group 2 */}
      <div className="flex justify-center">
        <h1 className=" absolute top-21 text-[20px] text-[#C8EDE0] font-game text-stroke-black mt-4  border-black">
          Members Group 2
        </h1>
      </div>

      {/* Grid แสดงสมาชิก */}
      <div className="grid grid-cols-2 gap-2 mt-31 place-items-center ">
        {members.map((member) => (
          <div key={member.id} className="text-center">
            {/* รูปภาพ */}
            <div className="sm:ml-0 h-[16vh] w-[14vh] overflow-hidden ">
              <img
                src={member.image}
                alt={member.name[0]}
                className="h-full w-full "
              />
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
