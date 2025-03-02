import React, { useState, useEffect, useMemo } from "react";
import { sortedWords } from "../../components/WordList/WordList";
import Pagination from "../../components/Pagination/Pagination";
import EnemyCard from "../../components/EnemyCard/EnemyCard";
import { ChevronLeft, Volume2, Search, CircleHelp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SkullA1 from "/skulls/SkullA1.gif";
import SkullA2 from "/skulls/SkullA2.gif";
import SkullB1 from "/skulls/SkullB1.gif";
import SkullB2 from "/skulls/SkullB2.gif";
import SkullC1 from "/skulls/SkullC1.gif";

function WordIndex() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const filteredCourses = useMemo(() => {
    return sortedWords.filter((W) =>
      W.word.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, sortedWords]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const itemsPerPage = 4; // จำนวนข้อมูลต่อหน้า
  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const [help, setHelp] = useState(false);
  const handleHelp = () => {
    setHelp(!help);
  };
  return (
    <div className="bg-[url(/src/backgrounds/bg-map.jpg)] h-[896px] bg-cover p-4 flex flex-col justify-between">
      <a
        href="/mode"
        className="h-[48px] w-[48px] border-[3px] rounded-[2px]  bg-[#E29F51] grid place-items-center"
      >
        <ChevronLeft className="h-[40px] w-[40px]" />
      </a>
      <div>
        <div className="text-[30px] flex justify-center mt-4 text-[#C5E369] text-outline-2 ">
          Flashcard
        </div>

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

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 place-items-center"
            >
              {currentItems.map((val) => (
                <EnemyCard
                  key={val.unique}
                  id={val.id}
                  word={val.word}
                  answer={val.answer}
                  img={val.img}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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

      <div className="flex justify-between">
        <div className="h-[56px] w-[56px] border-[2px] bg-[#E29F51] rounded-full grid place-items-center">
          <Volume2 />
        </div>
        <CircleHelp
          className="h-[56px] w-[56px] fill-[#E29F51] stroke-[1px]"
          onClick={handleHelp}
        />
        {help && (
          <div
            className="fixed inset-0 bg-black/50 z-10"
            onClick={handleHelp}
          ></div>
        )}
        {help && (
          <div
            className="fixed inset-0 flex justify-center items-center z-10"
            onClick={handleHelp}
          >
            <div className="h-[80vh] w-[90vw] border-2 bg-[#f7eab2] flex flex-col justify-between items-center py-4">
              <div className="flex">
                <div className="text-center text-[12px]  w-[40vw]">
                  <img src={SkullA1} alt="SkullA1" />
                  Level : A1
                </div>
                <div className="text-center text-[12px]  w-[40vw]">
                  <img src={SkullA2} alt="SkullA1" />
                  Level : A2
                </div>
              </div>
              <div className="flex">
                <div className="text-center text-[12px]  w-[40vw]">
                  <img src={SkullB1} alt="SkullA1" />
                  Level : B1
                </div>
                <div className="text-center text-[12px]  w-[40vw]">
                  <img src={SkullB2} alt="SkullA1" />
                  Level : B2
                </div>
              </div>
              <div className="flex">
                <div className="text-center text-[12px]  w-[40vw]">
                  <img src={SkullC1} alt="SkullA1" />
                  Level : C1
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WordIndex;
