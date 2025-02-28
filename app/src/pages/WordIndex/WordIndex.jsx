import React, { useState } from "react";
import wordsA1 from "../Game/gameA1";
import Pagination from "../../components/Pagination/Pagination";
import EnemyCard from "../../components/EnemyCard/EnemyCard";
import { ChevronLeft, Volume2, Search } from "lucide-react";

function WordIndex() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const filteredCourses = wordsA1.filter((W) => {
    const matchesWords = W.word
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesWords;
  });

  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const itemsPerPage = 4; // จำนวนข้อมูลต่อหน้า
  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-[url(/src/backgrounds/bg-map.jpg)] h-[896px] bg-cover p-4 flex flex-col justify-between">
      <a
        href="/"
        className="h-[48px] w-[48px] border-[3px] rounded-[2px]  bg-[#E29F51] grid place-items-center"
      >
        <ChevronLeft className="h-[40px] w-[40px]" />
      </a>
      <div>
        <div className="text-[30px] flex justify-center mt-4">EnemyIndex</div>

        <div className="border-2 h-[30px] rounded-[12px] m-4 bg-black/50 flex">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search the word"
            className="w-full text-[12px] outline-none ml-[4px] text-white"
          />
          <div className="grid place-items-end mx-[2px]">
            <Search className="text-white" />
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center">
          {currentItems.map((val) => (
            <EnemyCard id={val.id} word={val.word} answer={val.answer} />
          ))}
        </div>
      </div>

      <div>
        <div className="">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <div className="h-[56px] w-[56px] border-[2px] bg-[#E29F51] rounded-full grid place-items-center">
        <Volume2 />
      </div>
    </div>
  );
}

export default WordIndex;
